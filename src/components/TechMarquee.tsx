import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';
import { TechItem } from "@/components/DeveloperRoles";
import TechIcon from "@/components/TechIcon";

const MarqueeWrapper = memo(({ children }: { children: React.ReactNode }) => (
    <Marquee
        gradient
        gradientColor="hsl(var(--background))"
        speed={25}
        pauseOnHover
        gradientWidth={50}
    >
        {children}
    </Marquee>
));
MarqueeWrapper.displayName = 'MarqueeWrapper';

const TechMarquee = ({ technologies, showNames }: {technologies: TechItem[], showNames:boolean}) => {
    const content = (
        <div className="flex items-center mx-4">
            {technologies.map((tech, index) => (
                <TechIcon
                    key={`${tech.name}-${index}`}
                    path={tech.path}
                    name={tech.name}
                    showNames={showNames}
                />
            ))}
        </div>
    );

    return (
        <div className="w-[300px]">
            <MarqueeWrapper>
                {content}
            </MarqueeWrapper>
        </div>
    );
};

export default TechMarquee;