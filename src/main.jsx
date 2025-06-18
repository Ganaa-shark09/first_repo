import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import RoutedData from './RoutedData.jsx'
import CountriesData from './CountriesData.jsx'
import Header from './Header.jsx'
import CountryCard from './CountryCard.jsx'
import Errorpage from './Errorpage.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Errorpage/>
  },
  {
    path:'/countryinfo',
    element: <RoutedData/>
  }
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router}/>
  </StrictMode>,
)
