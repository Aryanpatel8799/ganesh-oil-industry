import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force light mode - prevent dark mode
const forceLight = () => {
  document.documentElement.classList.remove('dark');
  document.body.classList.remove('dark');
  document.documentElement.style.colorScheme = 'light';
  
  // Override any dark mode preferences
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const target = mutation.target as HTMLElement;
        if (target.classList.contains('dark')) {
          target.classList.remove('dark');
        }
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
  
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
};

// Apply light mode immediately
forceLight();

// Apply again after DOM is loaded
document.addEventListener('DOMContentLoaded', forceLight);

createRoot(document.getElementById("root")!).render(<App />);
