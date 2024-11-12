import { initLenis, getLenis } from "./core/lenis";
import { useEffect } from "react";

const MainScript = ({ path, ...props }) => {

    // const test = matchPathname()
    useEffect(() => {
        if (!getLenis()) {
            initLenis()
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("body").classList.remove("on-load");
        }, 100);
    }, [path])

    return null
};

export default MainScript;