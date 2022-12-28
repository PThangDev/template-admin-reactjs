import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ThemeProvider } from './contexts';
import GlobalThemeProvider from './layouts/themes/GlobalThemeProvider';
import reportWebVitals from './reportWebVitals';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* React Query Dev Tool */}
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider>
        <GlobalThemeProvider>
          <Router>
            <App />
          </Router>
        </GlobalThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
