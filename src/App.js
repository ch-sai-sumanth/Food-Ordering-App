import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const App=()=>{
    return(
       <div className="app">
         <Header/>
         <Outlet/>
       </div>
    );
};

const appRouter=createBrowserRouter([

{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    }

      ],
      errorElement:<Error/>,
    },
]);

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);