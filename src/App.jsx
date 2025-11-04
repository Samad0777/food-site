import Navbar from './components/Navbar'
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import BookTable from './pages/BookTable'
import NotFoundPage from './pages/NotFoundPage';
import BlogDescrip from './pages/BlogDescrip';
import ErrorPage from './pages/ErorrPage';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <div><Navbar/> <Outlet/><Footer/></div>,
    errorElement:<ErrorPage/>,
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
        element:<Menu/>,
        children:[
          {
            path:"/menu/all",
            element:<Menu/>
          },
          {
            path:"/menu/breakfast",
            element:<Menu/>
          },
          {
            path:"/menu/maindishes",
            element:<Menu/>
          },
          {
            path:"/menu/drinks",
            element:<Menu/>
          },
          {
            path:"/menu/desserts",
            element:<Menu/>
          },
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/blogs",
        element:<Pages/>
      },
      {
        path:"/blogs/:productID",
        element:<BlogDescrip/>
      },
      {
        path:"/booktable",
        element:<BookTable/>
      },
      {
        path:"*",
        element:<NotFoundPage/>
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
