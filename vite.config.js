import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//
// `base` determine le prefixe de toutes les URLs d'assets.
//  - En local (`npm run dev` / `npm run preview`) : '/' -> les fichiers de
//    `public/` sont servis depuis la racine, ex. '/images/benz1.png'.
//  - Sur GitHub Pages : '/driveluxury/' -> tout est servi sous ce sous-dossier,
//    ex. '/driveluxury/images/benz1.png'.
// On pilote donc le base via la variable d'environnement VITE_BASE_PATH :
//   npm run build            -> base '/' (defaut)
//   VITE_BASE_PATH=/driveluxury/ npm run build  -> base '/driveluxury/' (deploy)
export default defineConfig(({ command }) => {
  const envBase = process.env.VITE_BASE_PATH
  // Fallback : en production met '/driveluxury/', en dev '/'
 const base = envBase || '/'

  return {
    plugins: [
      react(),
      tailwindcss(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
    base,
  }
})
