import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import "./index.css"
import CardDetails from './components/cardDetails'
import Donation from "./components/Donation"
import ErrorPage from "./ErrorPage"

const router = createBrowserRouter([
	
	{
		path: "/",
		element: <Root/>,
		loader: () => fetch("cardData.json"),
		errorElement: <ErrorPage/>,
		children: [
			{
				loader: () => fetch("cardData.json"),
				path: "/donation",
				element: <Donation/>
			},
			
			{
				path: "/statistic",
				element: <div>Statistic Path</div>
			},
			
			{
				path: "/:cardId",
				loader: () => fetch("cardData.json"),
				element: <CardDetails randomThing={"Hello World"}/>
			},
			
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
