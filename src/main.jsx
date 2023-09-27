import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import "./index.css"
import CardDetails from './components/CardDetails'
import Donation from "./components/Donation"
import ErrorPage from "./ErrorPage"
import Statistics from './components/Statistics'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
	
	{
		path: "*",
		element: <NotFound/>
	},
	
	{
		path: "/",
		element: <Root/>,
		loader: async () => {
			const response = await fetch("cardData.json");
			const resource = await response.json();
			return resource;
		},
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
				path: "/details/:cardId",
				element: <CardDetails/>,
				loader: async ({ params }) => {
					const response = await fetch("cardData.json");
					const resource = await response.json();
					const cardId = parseInt(params.cardId);
					const data = resource.find(dat => dat.id === cardId)
					return data;
				},
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
