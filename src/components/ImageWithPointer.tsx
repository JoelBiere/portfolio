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
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    className="absolute -left-24 -top-16 transform rotate-45"
                >
                    <path
                        d="M10,90 Q30,90 40,70 T60,40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="text-primary animate-pulse"
                    />
                    {/* Arrow head */}
                    <path
                        d="M55,45 L70,45 L75,55"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary"
                    />
                </svg>

                {/* Text label */}
                <span className="absolute -left-16 -top-20 text-primary font-medium whitespace-nowrap">
          That's Me!
        </span>
            </div>
        </div>
    );
};

export default ImageWithPointer;