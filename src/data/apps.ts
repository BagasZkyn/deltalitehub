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
    name: "Delta Lite Clone",
    version: "2.703.1353",
    description: "Versi clone dengan versi lite yang membuat roblox menjadi super ringan.",
    // GANTI URL INI DENGAN LINK GITHUB RELEASE ASLI KAMU
    downloadUrl: "https://github.com/BagasZkyn/deltalitehub/releases/download/v2.703.1353/delta-lite-nathan-1.apk", 
    // ^ Contoh saya pakai link Git agar bisa dites jalan (karena public). Ganti dengan link .apk kamu.
    size: "108 MB",
    tags: ["Lite", "Delta", "Clone"],
  },
  {
    id: "2",
    name: "Delta Lite Clone 2",
    version: "2.703.1353",
    description: "Super ringan dan fps boost.",
    downloadUrl: "https://github.com/BagasZkyn/deltalitehub/releases/download/v2.703.1353/delta-lite-nathan-2.apk",
    size: "108 MB",
    tags: ["Lite", "Delta", "Clone"],
  },
  {
    id: "3",
    name: "Delta Lite Clone 3",
    version: "2.703.1353",
    description: "Versi super ringan. Grafik diturunkan untuk HP dengan RAM 2GB kebawah.",
    downloadUrl: "https://github.com/BagasZkyn/deltalitehub/releases/download/v2.703.1353/delta-lite-nathan-3.apk",
    size: "108",
    tags: ["Lite", "FPS Boost"],
  },
  {
    id: "4",
    name: "Delta Lite Clone 4",
    version: "2.703.1353",
    description: "Versi super ringan. Grafik diturunkan untuk HP dengan RAM 2GB kebawah.",
    downloadUrl: "https://github.com/BagasZkyn/deltalitehub/releases/download/v2.703.1353/delta-lite-nathan-4.apk",
    size: "108 MB",
    tags: ["Lite", "FPS Boost"],
  },
  {
    id: "5",
    name: "Delta Lite Clone 3",
    version: "2.703.1353",
    description: "Versi super ringan. Grafik diturunkan untuk HP dengan RAM 2GB kebawah.",
    downloadUrl: "https://github.com/BagasZkyn/deltalitehub/releases/download/v2.703.1353/delta-lite-nathan-5.apk",
    size: "108 MB",
    tags: ["Lite", "FPS Boost"],
  },
];
