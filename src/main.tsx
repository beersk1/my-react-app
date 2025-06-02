// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById("root")!).render(<App />);
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.tsx";
import "./index.css";

// Get the root element from the HTML
const rootElement = document.getElementById("root");

// Ensure the root element exists before creating the React root
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      {/*
        Wrap your App component with BrowserRouter.
        The 'basename' prop is crucial for GitHub Pages.
        It tells React Router that your app is served from a sub-directory
        (in this case, '/my-react-app/') on your domain.
        This must match the 'base' in your vite.config.js and
        the repository name in your GitHub Pages URL.
      */}
      <BrowserRouter basename="/my-react-app/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  // Log an error if the root element is not found, useful for debugging
  console.error('Root element with ID "root" not found in the document.');
}
