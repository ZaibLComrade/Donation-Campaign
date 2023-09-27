import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import "./index.css"
import CardDetails from './components/CardDetails'
import Donation from "./components/Donation"
import ErrorPage from "./ErrorPage"
import Statistics from './components/Statistics'

const router = createBrowserRouter([
	
	{
		path:"*",
		element: <div>404 Page not found</div>
	},
	
	{
		path: "/",
		element: <Root/>,
		loader: () => fetch("cardData.json"),
		errorElement: <ErrorPage/>,
		children: [
			{
				path: "/donation",
				element: <Donation/>
			},
			
			{
				path: "/statistics",
				element: <Statistics/>
			},
			
			{
				path: "/:cardId",
				element: <CardDetails/>
			},
			
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
