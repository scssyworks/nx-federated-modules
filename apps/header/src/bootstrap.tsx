import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mountRootParcel } from 'single-spa';
import Parcel from 'single-spa-react/parcel';

import App from './app/app';

const loadMicroApp = async () => {
  // eslint-disable-next-line
  // @ts-ignore
  const FooterModule = await import('FooterApp/Footer');
  return FooterModule.default;
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
      <Parcel config={loadMicroApp} mountParcel={mountRootParcel} />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
