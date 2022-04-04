import { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/app';

// eslint-disable-next-line
// @ts-ignore
const Footer = lazy(() => import('FooterApp/Footer'));

const FooterComp = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Footer />
    </Suspense>
  );
};

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <main>
        <Routes>
          <Route path="/" element={<h2>Welcome to homepage</h2>} />
        </Routes>
      </main>
      <FooterComp />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
