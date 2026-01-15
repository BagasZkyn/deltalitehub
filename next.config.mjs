/** @type {import('next').NextConfig} */
const nextConfig = {
    // Menghindari error jika ada image dari domain luar (opsional tapi aman dipasang)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
