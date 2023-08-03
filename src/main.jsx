import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Profile from './components/Profile-data.jsx';

const router  = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/profile",
        element:<Profile/>,
      }
    ]

  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
