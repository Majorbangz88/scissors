import NavBar from "../assets/components/navBar"
import Footer from "../assets/components/footer"
import BodyContent from "../assets/components/outlet"
import ThirdSection from "../assets/components/thirdSection"
import FourthSection from '../assets/components/fourthSection'
import PaymentSection from "../assets/components/paymentSection"
import FinalSection from "../assets/components/finalSection"

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <BodyContent/>
            <ThirdSection />
            <FourthSection />
            <PaymentSection />
            <FinalSection />
            <Footer/>
        </div>
    )
}
export default Layout