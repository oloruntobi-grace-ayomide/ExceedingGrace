import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({children, title="Exceeding Grace Day Care"}) => {
    document.title = title
    return (
        <div>
            <Navigation/>
            <div className="body-content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default Layout