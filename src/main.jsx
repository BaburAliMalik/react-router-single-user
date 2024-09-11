
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import SingleStudent from './pages/SingleStudent'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
      path:"/",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>,
      children: [
        {
          path: "",
          element: <h1>person1</h1>
      },
      {
        path:"person2",
        element: <h1>person2</h1>
      },
      {
        path:"person3",
        element: <h1>person3</h1>
      }
    ]
    },
    {
      path: "contact",
      element: <Contact/>
    },
    {
      path:"services",
      element: <Services/>
    },
    {
      path: "singlestudent/:id",
      element: <SingleStudent/>
    },
    {
      path:"*",
      element: <Home/>
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
