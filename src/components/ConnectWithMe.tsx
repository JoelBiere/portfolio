"use client"

import {Button} from "@/components/ui/button";
import {GithubOutlined, GitlabOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import {Separator} from "@/components/ui/separator";

const ConnectWithMe = () => {


    return (

        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Connect With Me!</h4>
                <p className="text-sm text-muted-foreground">
                    My first preference is email
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm" id={"connect-section"}>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    title={"Email Me!"}
                    onClick={() => window.open('mailto:joel.biere12@gmail.com', '_blank')}
                >
                    <MailOutlined/>
                </Button>
                <Separator orientation={"vertical"}/>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    title={"Call/Text Me!"}
                    onClick={() => window.open('tel:+19016161431', '_blank')}
                >
                    <PhoneOutlined/>
                </Button>
                <Separator orientation={"vertical"}/>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    title={"Find me on LinkedIn!"}
                    onClick={() => window.open('https://www.linkedin.com/in/joel-biere-1a7b947b/', '_blank')}
                >
                    <LinkedinOutlined/>
                </Button>
                <Separator orientation={"vertical"}/>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    title={"Find me on GitHub!"}
                    onClick={() => window.open('https://github.com/JoelBiere', '_blank')}
                >
                    <GithubOutlined/>
                </Button>
                <Separator orientation={"vertical"}/>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    title={"Find me on GitLab!"}
                    onClick={() => window.open('https://gitlab.com/imcc-jbiere', '_blank')}
                >
                    <GitlabOutlined/>
                </Button>
            </div>
        </div>
    )

}
export default ConnectWithMe