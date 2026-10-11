import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'Family Fuel',short_name:'Family Fuel',description:'Your family meal library and shopping planner',theme_color:'#f8f7f2',background_color:'#f8f7f2',display:'standalone',start_url:'/',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{navigateFallback:'/index.html',globPatterns:['**/*.{js,css,html,svg,png}']}})]});
