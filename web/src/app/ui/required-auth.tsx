import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const wallet = useWallet();
  const location = useLocation();

  console.log(wallet);
  console.log(wallet.connected);

  if (!wallet.connected) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
}
