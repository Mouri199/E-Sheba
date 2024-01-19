import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";

import './index.css'
import { router } from './Router/Route';
import AuthContributor from './Components/AuthContributor/AuthContributor';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1600px] mx-auto'>
    <AuthContributor>
      <React.StrictMode >
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthContributor>
  </div>
)
