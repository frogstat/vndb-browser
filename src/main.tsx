import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import VisualNovelPage from "./components/VisualNovelPage.tsx";
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <VisualNovelPage/>
  </StrictMode>,
)
