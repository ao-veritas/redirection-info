import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ArweaveWalletKit } from 'arweave-wallet-kit';
import AppRouter from './AppRouter';
import { Helmet } from 'react-helmet';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Helmet>
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6EB5E3GYRN"></script>
      <script type="text/javascript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-6EB5E3GYRN');
        `}
      </script>
    </Helmet>

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
