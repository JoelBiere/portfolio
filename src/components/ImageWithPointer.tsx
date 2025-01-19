import React from 'react';
import Image from "next/image";

const ImageWithPointer = () => {
    return (
        <div className="relative inline-block">
            {/* Image */}
            <Image
                src="/images/Family-removebg.png"
                alt="Joel and family"
                width={400}
                height={400}
                className="rounded-lg border border-secondary border-dashed"
            />

            {/* Pointer container */}
            <div className="absolute top-1/3 left-64">
                {/* Curved arrow using SVG */}
                <svg
                    width="150"
                    height="100"
                    viewBox="0 0 100 100"
                    className="absolute -left-36 -top-44 "
                >
                    <path
                        // d="M10,90 Q30,90 40,70 T60,40"
                        d={"M50, 50, Q70,30,80,57, T105, 75"}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="text-primary animate-pulse"
                    />
                    {/* Arrow head */}
                    {/*<path*/}
                    {/*    d="M105,60, L 110, 75, L 100, 85"*/}
                    {/*    fill="none"*/}
                    {/*    stroke="currentColor"*/}
                    {/*    strokeWidth="2"*/}
                    {/*    className="text-primary"*/}
                    {/*/>*/}
                    {/* Text label */}
                    <text
                        x="20"
                        y="50"
                        fill="currentColor"
                        className="text-primary"
                        textAnchor="middle"
                        style={{ fontFamily: "'Shadows Into Light', cursive" }}
                    >
                        <tspan x="20" dy="0">{"That's"}</tspan>
                        <tspan x="20" dy="1.2em">Me!</tspan>
                    </text>
                </svg>

            </div>
        </div>
    );
};

export default ImageWithPointer;