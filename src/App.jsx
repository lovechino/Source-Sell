



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home"
import ProductDetail from "./UI/Details";
import Cart from "./UI/Cart";


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