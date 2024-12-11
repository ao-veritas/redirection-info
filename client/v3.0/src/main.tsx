import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ArweaveWalletKit } from 'arweave-wallet-kit';
import AppRouter from './AppRouter';
import ReactGA from "react-ga4";


ReactGA.initialize("G-6EB5E3GYRN");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>


    <ArweaveWalletKit
      config={{
        permissions: ["SIGN_TRANSACTION", "ACCESS_ADDRESS"],
        ensurePermissions: true,
      }}
      theme={{
        radius: "minimal",
        titleHighlight: { r: 209, g: 109, b: 27 },
        accent: { r: 37, g: 41, b: 28 },
      }}
    >
      <AppRouter />
    </ArweaveWalletKit>
  </StrictMode>
);
