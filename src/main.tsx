import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DrawerAppBar from './DrawAppBar.tsx';
import ContactPage from './ContactPage.tsx';
import AboutPage from './AboutPage.tsx';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
"react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index Component= {DrawerAppBar}/>
      <Route path='about'Component={AboutPage} />
      <Route path='contact' Component={ContactPage} />
    </Route>
  )
)

const darkTheme = createTheme ({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffaa6a", 
    }
  },
}
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
