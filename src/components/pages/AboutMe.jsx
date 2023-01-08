import React from "react";
import { Layout, Card } from "antd";

import useDarkMode from "../../hooks/useDarkMode";

const { Content } = Layout;

const AboutMe = () => {
    const darkMode = useDarkMode();

    return (
        <Layout>
            <Content
                style={{
                    background: darkMode.on ? "#02101d" : "white",
                    padding: "1rem"
                }}
            >
                <Card
                    title="Experience"
                >
                    <p>
                        React Developer Intern at <a href="https://www.zealtech.com/">ZealTech</a> (May 2021 - Present)
                    </p>
                </Card>
            </Content>
        </Layout>
    );
}

export default AboutMe;
