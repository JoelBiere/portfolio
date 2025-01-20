"use client"
import React, {useState} from 'react';
import { Separator } from "@/components/ui/separator";
import TechMarquee from "@/components/TechMarquee";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";

export interface TechItem {
    name: string;
    path: string;
}

const DeveloperRoles = () => {
    const [showNames, setShowNames] = useState(false)

    const backendTech: TechItem[] = [
        { name: 'Java', path: '/icons/java-plain.svg' },
        { name: 'SpringBoot', path: '/icons/springboot.svg' },
        { name: 'Quarkus', path: '/icons/quarkus.svg' },
        { name: 'C', path: '/icons/c.svg' },
        { name: 'Python', path: '/icons/python.svg' },
        { name: 'FastAPI', path: '/icons/fastapi.svg' },
        { name: 'Node.js', path: '/icons/nodedotjs.svg' },
        { name: 'Kafka', path: '/icons/apachekafka.svg' },
        { name: 'GraphQL', path: '/icons/graphql.svg' },
        { name: 'PostgreSQL', path: '/icons/postgresql.svg' }
    ];

    const frontendTech: TechItem[] = [
        { name: 'React', path: '/icons/react.svg' },
        { name: 'Redux', path: '/icons/redux.svg' },
        { name: 'TypeScript', path: '/icons/typescript.svg' },
        { name: 'Tailwind', path: '/icons/tailwindcss.svg' },
        { name: 'Next.js', path: '/icons/nextdotjs.svg' },
        { name: 'HTML5', path: '/icons/html5.svg' },
        { name: 'CSS3', path: '/icons/css3.svg' },
        { name: 'Angular', path: '/icons/angular.svg' },
        { name: 'JavaScript', path: '/icons/javascript.svg' }
    ];

    const fullstackTech: TechItem[] = [
        { name: 'Docker', path: '/icons/docker.svg' },
        { name: 'Openshift', path: '/icons/redhatopenshift.svg' },
        { name: 'Git', path: '/icons/git.svg' },
        { name: 'GitLab', path: '/icons/gitlab.svg' },
        { name: 'GraphQL', path: '/icons/graphql.svg' },
        { name: 'Firebase', path: '/icons/firebase.svg' },
        { name: 'Hasura', path: '/icons/hasura.svg' },
        { name: 'Linux', path: '/icons/linux.svg' }
    ];

    return (
        <div className="mt-4">
            <h2 className="text-base text-foreground/70 mb-3">
                Former educator turned software developer who...
            </h2>

            <div className="space-y-2">
                <div className="slide-in-1 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-foreground hover:text-primary/80 transition-colors py-1">
                        <span className="text-primary">Engineers</span> Backend Systems
                    </h3>
                    <TechMarquee technologies={backendTech} showNames={showNames}/>
                </div>

                <Separator className="my-2"/>

                <div className="slide-in-2 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-foreground hover:text-primary/80 transition-colors py-1">
                        <span className="text-primary">Creates</span> Frontend Interfaces
                    </h3>
                    <TechMarquee technologies={frontendTech} showNames={showNames}/>
                </div>

                <Separator className="my-2"/>

                <div className="slide-in-3 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-foreground hover:text-primary/80 transition-colors py-1">
                        <span className="text-primary">Builds</span> Fullstack Applications
                    </h3>
                    <TechMarquee technologies={fullstackTech} showNames={showNames}/>
                </div>
                <Separator className={"my-2"}/>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-end gap-2">
                        <Label htmlFor="show-names" className="text-xs text-muted-foreground">
                            Show Names
                        </Label>
                        <Switch
                            id="show-names"
                            checked={showNames}
                            onCheckedChange={setShowNames}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperRoles;