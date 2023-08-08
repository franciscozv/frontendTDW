// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={ queryClient }>

    <BrowserRouter>
      <CssBaseline/>
      <App />
    </BrowserRouter>
    </QueryClientProvider>

  // </React.StrictMode>,
)
