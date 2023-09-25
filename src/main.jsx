import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		loader: () => fetch("cardData.json"),
		children: [
			{
				path: "/donation",
				element: <div className="text-green-500">Donation Path</div>
			},
			
			{
				path: "/statistic",
				element: <div>Statistic Path</div>
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)