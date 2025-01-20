import React, { useEffect, useState } from 'react';

const TechIcon = ({ path, name, showNames }: {path: string, name: string, showNames:boolean}) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch(path)
            .then(response => response.text())
            .then(svg => {
                const cleanedSvg = svg.replace(/fill="[^"]*"/g, '');
                setSvgContent(cleanedSvg);
            });
    }, [path]);

    return (
        // Fixed width container that's wide enough for the longest text
        <div className="w-32 shrink-0 h-6 relative flex items-center justify-center">
            {/* Icon container - centered */}
            <div
                className={`
                    absolute inset-0 flex items-center justify-center
                    transition-opacity duration-300 ease-in-out
                    ${showNames ? 'opacity-0' : 'opacity-100'}
                `}
            >
                <div
                    className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-foreground"
                    title={name}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                />
            </div>
            {/* Text container - also centered */}
            <div
                className={`
                    absolute inset-0 flex items-center justify-center
                    transition-opacity duration-300 ease-in-out
                    ${showNames ? 'opacity-100' : 'opacity-0'}
                    whitespace-nowrap px-2 text-sm font-medium text-foreground
                `}
            >
                {name}
            </div>
        </div>
    );
};

export default TechIcon;