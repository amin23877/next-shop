"use client";
import { useEffect, useRef, useState } from "react";
import Carousel from "../CustomCarousel";

export default function ProductList() {
    const ref = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }
    }, []);

    let items = [
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "red",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "red",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "red",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "red",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "blue",
                border: "1px solid white",
            }}
        ></div>,
        <div
            key={Math.random()}
            style={{
                width: "190px",
                height: "250px",
                background: "green",
                border: "1px solid white",
            }}
        ></div>,
    ];

    return (
        <div
            ref={ref}
            key={Math.random()}
            style={{ width: "100%", height: "250px", borderRadius: "24px", overflow: "hidden" }}
        >
            <Carousel items={items} count={width / 190} />
        </div>
    );
}
