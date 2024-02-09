import React from 'react'
import Login from './Login'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        }
    ])
  return (
    <div className=''>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
