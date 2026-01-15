// FILE: src/components/AppCard.tsx
"use client";

import { useState } from "react";
import { AppData } from "@/data/apps";
import { motion } from "framer-motion";
import { Download, CheckCircle, AlertCircle, Box, Loader2 } from "lucide-react";
import axios from "axios";

export default function AppCard({ app, index }: { app: AppData; index: number }) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "downloading" | "completed" | "error">("idle");

  const handleDownload = async () => {
    if (downloading) return;

    setDownloading(true);
    setStatus("downloading");
    setProgress(0);

    try {
      // Panggil API Proxy kita sendiri
      const proxyUrl = `/api/download?url=${encodeURIComponent(app.downloadUrl)}`;

      const response = await axios.get(proxyUrl, {
        responseType: "blob", // Response berupa file binary
        onDownloadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          }
        },
      });

      // Trigger download di browser setelah selesai buffering
      const fileName = app.downloadUrl.split('/').pop() || `${app.name}.apk`;
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      
      // Bersihkan memory
      link.remove();
      window.URL.revokeObjectURL(url);
      
      setStatus("completed");
      setTimeout(() => setStatus("idle"), 4000); 
    } catch (error) {
      console.error("Download failed", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative group bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col h-full"
    >
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header: Icon & Tags */}
      <div className="relative z-10 flex justify-between items-start mb-5">
        <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700/50 group-hover:bg-violet-900/20 group-hover:border-violet-500/30 transition-all">
          <Box className="w-8 h-8 text-violet-400 group-hover:text-violet-200" />
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {app.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
          {app.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
          {app.description}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-6">
          <div className="bg-black/40 px-2 py-1 rounded border border-zinc-800">v{app.version}</div>
          <div className="bg-black/40 px-2 py-1 rounded border border-zinc-800">{app.size}</div>
        </div>
      </div>

      {/* Button Area */}
      <div className="relative z-10 mt-auto">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className={`w-full h-12 relative flex items-center justify-center gap-2 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden shadow-lg
            ${status === 'idle' ? 'bg-white text-zinc-950 hover:bg-violet-400 hover:text-white hover:shadow-violet-500/25' : ''}
            ${status === 'downloading' ? 'bg-zinc-800 text-violet-300 cursor-wait' : ''}
            ${status === 'completed' ? 'bg-emerald-500 text-white shadow-emerald-500/25' : ''}
            ${status === 'error' ? 'bg-rose-500 text-white shadow-rose-500/25' : ''}
          `}
        >
          {/* Progress Bar Background fill */}
          {status === 'downloading' && (
             <motion.div 
             className="absolute left-0 top-0 bottom-0 bg-violet-600/20 z-0"
             initial={{ width: 0 }}
             animate={{ width: `${progress}%` }}
           />
          )}

          {/* Icon & Text Logic */}
          <div className="relative z-10 flex items-center gap-2">
            {status === "idle" && (
              <>
                <Download className="w-4 h-4" />
                <span>DOWNLOAD APK</span>
              </>
            )}

            {status === "downloading" && (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="font-mono">{progress}%</span>
              </>
            )}

            {status === "completed" && (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>BERHASIL</span>
              </>
            )}

            {status === "error" && (
              <>
                <AlertCircle className="w-5 h-5" />
                <span>GAGAL</span>
              </>
            )}
          </div>

          {/* Smooth Progress Line at bottom */}
          {status === "downloading" && (
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-violet-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          )}
        </button>
      </div>
    </motion.div>
  );
              }
