import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componenets/Home/Home';
import About from './Componenets/About/About';
import Books from './Componenets/Books/Books';
import BookDetail from './Componenets/BookDetail/BookDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetail></BookDetail>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
