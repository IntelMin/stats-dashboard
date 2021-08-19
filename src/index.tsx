import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'normalize.css';

import { Providers } from 'providers';
import 'styles/layout.scss';
Sentry.init({
  dsn: "https://da333a6413ee4fe7bd58c6732cd8a0bb@o930158.ingest.sentry.io/5878718",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











