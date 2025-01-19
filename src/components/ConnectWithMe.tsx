"use client"

import {Button} from "@/components/ui/button";
import {GithubOutlined, GitlabOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import {Label} from "@/components/ui/label";

const ConnectWithMe = () => {


    return (
        <div className={"flex flex-row"} id={"connect-section"}>
            <Label className={"flex items-center"}>
                Connect With Me:
            </Label>
            <Button
                variant={"ghost"}
                size={"icon"}
                title={"Email Me!"}
                onClick={() => window.open('mailto:joel.biere12@gmail.com', '_blank')}
            >
                <MailOutlined />
            </Button>
            <Button
                variant={"ghost"}
                size={"icon"}
                title={"Call/Text Me!"}
                onClick={() => window.open('tel:+19016161431', '_blank')}
            >
                <PhoneOutlined />
            </Button>
            <Button
                variant={"ghost"}
                size={"icon"}
                title={"Find me on LinkedIn!"}
                onClick={() => window.open('https://www.linkedin.com/in/joel-biere-1a7b947b/', '_blank')}
            >
                <LinkedinOutlined />
            </Button>
            <Button
                variant={"ghost"}
                size={"icon"}
                title={"Find me on GitHub!"}
                onClick={() => window.open('https://github.com/JoelBiere', '_blank')}
            >
                <GithubOutlined />
            </Button>
            <Button
                variant={"ghost"}
                size={"icon"}
                title={"Find me on GitLab!"}
                onClick={() => window.open('https://gitlab.com/imcc-jbiere', '_blank')}
            >
                <GitlabOutlined />
            </Button>
        </div>
    )

}
export default ConnectWithMe