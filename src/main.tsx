import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { InspectionsContextProvider } from './sections/Inspection/InspectionsContext.tsx'
import { createLocalStorageInspectionRepository } from './modules/inspection/infrastructure/LocalStorageRepository.ts'

const inspectionRepository = createLocalStorageInspectionRepository();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InspectionsContextProvider inspectionRepository={inspectionRepository}>
      <Router>
        <App />
      </Router>
    </InspectionsContextProvider>
  </React.StrictMode>,
)
