// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import App from './App.tsx'
// import './index.css';
// import { ArweaveWalletKit } from 'arweave-wallet-kit'
// import AppRouter from './AppRouter.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//          <ArweaveWalletKit
//       config={{
//         permissions: ["SIGN_TRANSACTION", "ACCESS_ADDRESS"],
//         ensurePermissions: true,
//       }}
//       theme={{
//         radius: "minimal",
//         titleHighlight: { r: 209, g: 109, b: 27 },
//         accent: { r: 37, g: 41, b: 28 },
//       }}
//     >
//     <AppRouter />
//     </ArweaveWalletKit>
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import { ArweaveWalletKit } from 'arweave-wallet-kit';
import AppRouter from './AppRouter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Helmet>
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JGF465EZHY"></script>
      <script type="text/javascript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-JGF465EZHY');
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
