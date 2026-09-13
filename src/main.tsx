import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AiErrorBoundary } from './components/AiErrorBoundary.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiErrorBoundary>
      <App />
    </AiErrorBoundary>
  </StrictMode>,
);
