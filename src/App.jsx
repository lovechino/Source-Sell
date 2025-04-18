import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy } from "react";

const Home = lazy(() => import("./UI/Home"));
const ProductDetail = lazy(()=>import("./UI/Details"))
const Cart = lazy(()=>import("./UI/Cart"))

const browerRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },{
    path: '/detail',
    element : <ProductDetail/>
  },{
    path: '/cart',
    element : <Cart/>
  }
])



function App() {

  return (
    <>
      <RouterProvider router={browerRouter}/>
    </>
  );
}



export default App;