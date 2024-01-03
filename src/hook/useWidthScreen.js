import { useLayoutEffect, useState } from "react";

const useWidthScreen = () => {

    const [widthScreen, setWidthScreen] = useState();
    useLayoutEffect(() => {
        const handleResize = () => {
            setWidthScreen(window.innerWidth);
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return widthScreen
}

export default useWidthScreen