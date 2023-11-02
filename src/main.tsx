import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from '@/components/base/App';
import { SettingsProvider } from './contexts/SettingsProvider';

// import { ThemeProvider } from '@fb24m/ui/components/ThemeProvider';
// import { fb24mLightTheme } from '@fb24m/ui/themes/fb24mLightTheme';
// import { fb24mDarkTheme } from '@fb24m/ui/themes/fb24mDarkTheme';
// import { isLightTheme } from './functions/isLightTheme';

const queryClient = new QueryClient();

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </QueryClientProvider>
  </React.StrictMode>
);