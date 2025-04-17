
import AuthForm from "../Components/Auth"
import Footer from "../Components/Footer/Footer"
import ResponsiveNav from "../Components/Nav/ResponsiveNav"
import HotProduct from "../Components/Products/HotProduct"
import ListProduct from "../Components/Products/ListProduct"
import CarouselComponent from "../Components/Slide"
import ProductDetail from "./Details"

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