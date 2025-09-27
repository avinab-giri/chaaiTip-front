"use client";
import { useEffect } from "react";

const ThemeColorSetter = ({ color }: { color: string }) => {
    useEffect(() => {
        document.documentElement.style.setProperty("--theme-color", color);
    }, [color]);

    return null;
}

export default ThemeColorSetter