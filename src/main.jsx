import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import JobDetails from './components/JobDetails/JobDetails';
import ApplliedJobs from './components/AppliedJobs/ApplliedJobs';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch('/featuredJobs.json')

      },
      {
        path: "/jobDetails/:jobID",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('/featuredJobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <ApplliedJobs></ApplliedJobs>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
