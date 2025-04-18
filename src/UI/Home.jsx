
import { lazy } from "react"
import AuthForm from "../Components/Auth"
import Footer from "../Components/Footer/Footer"





const  ResponsiveNav = lazy(() => import("../Components/Nav/ResponsiveNav"))
const HotProduct = lazy(()=>import("../Components/Products/HotProduct"))
const ListProduct = lazy(()=>import("../Components/Products/ListProduct"))
const CarouselComponent = lazy(()=>import("../Components/Slide"))
const Home = ()=>{
    return(
        <div className=" overflow-hidden">
            <ResponsiveNav/>
            <CarouselComponent />
            <HotProduct/>
            <ListProduct/>
            <Footer/>
        </div>
    )
}

export default Home