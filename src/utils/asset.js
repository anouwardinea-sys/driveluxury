// ------------------------------------------------------------------
// Helper pour construire des URLs d'assets compatibles avec `base`.
//
// Pourquoi ? Vite expose `import.meta.env.BASE_URL` qui vaut :
//   - '/' en developpement et en preview local
//   - '/driveluxury/' lors du build de deploiement (GitHub Pages)
//
// Un chemin absolu code en dur comme "/images/benz1.png" ignore ce
// prefixe et provoque un 404. En passant les chemins par `asset()`,
// l'URL reste correcte dans les deux contextes.
//
// Usage :
//   import { asset } from '../utils/asset'
//   <img src={asset('/images/benz1.png')} />
// ------------------------------------------------------------------

export function asset(path) {
  if (!path) return path

  // On ne touche pas aux URLs externes (http, https, data:, //cdn...)
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path
  }

  const base = import.meta.env.BASE_URL || '/'

  // On evite le double slash si le chemin commence deja par '/'
  const clean = path.startsWith('/') ? path.slice(1) : path
  const prefix = base.endsWith('/') ? base : `${base}/`

  return `${prefix}${clean}`
}

export default asset
