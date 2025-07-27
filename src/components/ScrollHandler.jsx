import { useEffect } from "react";
const ScrollHandler = ({children}) => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },100);
    return(
        <>{children}</>
    )
}
export default ScrollHandler