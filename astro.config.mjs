import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        imageService: true,
        webAnalytics: { enabled: true }
    }),
    integrations: [react({
        experimentalReactChildren: true
    })],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
    },
    image: {
        service: passthroughImageService(),
    },
    vite: {
        ssr: {
            noExternal: [
                'gsap'
            ]
        }
    }
});