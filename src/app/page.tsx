// FILE: src/app/page.tsx
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";
import { Terminal, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400">STATUS: ONLINE v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            ROBLOX <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">CLONE</span> HUB
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Platform distribusi modifikasi eksklusif. Download clone APK dengan kecepatan tinggi, aman, dan tanpa iklan pop-up yang mengganggu.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4 opacity-80">
            <FeatureBadge icon={<Zap className="w-4 h-4 text-yellow-500" />} text="Direct Download" />
            <FeatureBadge icon={<Shield className="w-4 h-4 text-emerald-500" />} text="Virus Free" />
            <FeatureBadge icon={<Terminal className="w-4 h-4 text-violet-500" />} text="Script Support" />
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-zinc-900/50 pt-10 pb-6 text-center">
          <p className="text-zinc-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} Roblox Clone Hub. Developed for Community.
          </p>
        </footer>
      </div>
    </main>
  );
}

// Komponen Kecil untuk Badge di Hero
function FeatureBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
      {icon}
      <span className="text-xs font-semibold text-zinc-300">{text}</span>
    </div>
  );
            }
