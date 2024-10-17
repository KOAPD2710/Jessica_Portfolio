import { initLenis, getLenis } from "./core/lenis";

import { useEffect } from "react";

const MainScript = ({ ...props }) => {
    useEffect(() => {
        if (!getLenis()) {
            initLenis()
        }
    }, []);

    return null
};

export default MainScript;