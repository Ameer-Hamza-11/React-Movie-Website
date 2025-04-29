import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Movie } from './Pages/Movie'
import { Contact, contactData } from './Pages/Contact'
import { AppLayout } from './Components/AppLayout'
import './App.css'
import { ErrorPage } from './Components/ErrorPage'
import { FetchApiData } from './Api/FetchApiData'
import { MovieDetails } from './Components/MovieDetails'
import { getMovieData } from './Api/GetMovieData'
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: FetchApiData,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMovieData,
        },
        {
          path: '/contact',
          element: <Contact />,
          action: contactData,

        },
      ]
    },

  ])


  return <RouterProvider router={router} />
}

export default App
