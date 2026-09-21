import { Navigate } from 'react-router-dom';

// Ce projet est 100% frontend (aucune auth réelle).
// Le composant reste disponible au cas où une route protégée serait ajoutée :
// il redirige vers l'accueil tant qu'aucune authentification n'est branchée.
export default function ProtectedRoute({ children, isAuthenticated = true }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
