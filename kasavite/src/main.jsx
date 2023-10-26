import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Lodging from "./pages/Lodging/Lodging"
import Error from "./pages/Error/Error"

const router = createBrowserRouter([
	{ path: "/", element: <Home />},
	{ path: "/about", element: <About />},
	{ path: "/lodging/:id", element: <Lodging />},
	{ path: "/*", element: <Error />},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
			<RouterProvider router={router} />
		</main>
  </React.StrictMode>,
)