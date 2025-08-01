import { useEffect } from "react";
const ScrollHandler = ({children}) => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const timeoutId = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                return () => clearTimeout(timeoutId); // Cleanup
            }
        }
        }, []);
    return(
        <>{children}</>
    )
}
export default ScrollHandler