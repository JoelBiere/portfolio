import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import {TechItem} from "@/components/DeveloperRoles";

const TechIcon = ({ path, name }: {path: string, name: string}) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch(path)
            .then(response => response.text())
            .then(svg => {
                // Remove the existing fill attribute if present
                const cleanedSvg = svg.replace(/fill="[^"]*"/g, '');
                setSvgContent(cleanedSvg);
            });
    }, [path]);

    return (
        <div
            className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-foreground"
            title={name}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

const TechMarquee = ({ technologies }: {technologies: TechItem[]}) => {
    return (
        <div className="w-[300px]">
            <Marquee
                gradient
                gradientColor="hsl(var(--background))"
                speed={30}
                pauseOnHover
                gradientWidth={50}
            >
                <div className="flex gap-6 mx-4">
                    {technologies.map((tech, index) => (
                        <TechIcon
                            key={`${tech.name}-${index}`}
                            path={tech.path}
                            name={tech.name}
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default TechMarquee;