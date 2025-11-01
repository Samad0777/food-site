import Navbar from './components/Navbar'
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import BookTable from './pages/BookTable'
import Erorr404 from './pages/Erorr404';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <div><Navbar/> <Outlet/><Footer/></div>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/pages",
        element:<Pages/>
      },
      {
        path:"/booktable",
        element:<BookTable/>
      },
      {
        path:"*",
        element:<Erorr404/>
      },
    ]
   },
]);

const App = () => {
  return (
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default App
