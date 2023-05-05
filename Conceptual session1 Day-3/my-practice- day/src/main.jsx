import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import BookDetail from './components/BookDetail/BookDetail';
import LoadingSpining from './components/LoadingSpining/LoadingSpining';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "book/:id",
        element: <BookDetail></BookDetail>,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)

      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: 'loader',
        element: <LoadingSpining></LoadingSpining>
      }
    ]
  },
  // {
  //   path: 'about',
  //   element: <h1>About</h1>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
