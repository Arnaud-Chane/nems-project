import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import DescribeMovie from './components/DescribeMovie.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/",
    element: <DescribeMovie />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
