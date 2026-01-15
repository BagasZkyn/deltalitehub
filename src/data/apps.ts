// FILE: src/data/apps.ts

export interface AppData {
  id: string;
  name: string;
  version: string;
  description: string;
  downloadUrl: string; // Link langsung ke file APK di GitHub Release
  size: string;
  tags: string[];
}

export const apps: AppData[] = [
  {
    id: "1",
    name: "Roblox Clone V1 (Speed)",
    version: "2.5.1",
    description: "Versi clone dengan fitur speed hack, wallhack, dan anti-ban system terbaru.",
    // GANTI URL INI DENGAN LINK GITHUB RELEASE ASLI KAMU
    downloadUrl: "https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe", 
    // ^ Contoh saya pakai link Git agar bisa dites jalan (karena public). Ganti dengan link .apk kamu.
    size: "125 MB",
    tags: ["Mod", "Speed", "Anti-Ban"],
  },
  {
    id: "2",
    name: "Roblox Arceus X",
    version: "3.0.0",
    description: "Mod menu lengkap dengan UI melayang, fitur terbang, dan script hub executor.",
    downloadUrl: "https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-32-bit.exe",
    size: "140 MB",
    tags: ["Menu", "Fly", "Executor"],
  },
  {
    id: "3",
    name: "Roblox Lite Potato",
    version: "1.0.5",
    description: "Versi super ringan. Grafik diturunkan untuk HP dengan RAM 2GB kebawah.",
    downloadUrl: "https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe",
    size: "90 MB",
    tags: ["Lite", "FPS Boost"],
  },
];
