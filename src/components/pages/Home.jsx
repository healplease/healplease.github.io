import React, { useState } from "react";
import { Layout, Card, Button, Space, Typography } from "antd";

import useDarkMode from "../../hooks/useDarkMode";

import "./home.scss";

const { Content } = Layout;
const { Title, Paragraph } = Typography;


const descriptions = [
    {
        buttonTitle: "Less",
        description: <Typography>
            <Title level={2} style={{ textAlign: "center" }}>
                Hi, I'm Alex!
            </Title>
            <Paragraph>
                I am developer.
            </Paragraph>
            <Paragraph>
                I like Python and React.
            </Paragraph>
            <Paragraph>
                I like to play guitar.
            </Paragraph>
        </Typography>
    },
    {
        buttonTitle: "Default",
        description: <Typography>
            <Title level={2} style={{ textAlign: "center" }}>
                Hello, I am Oleksii!
            </Title>
            <Paragraph>
                I'm a Full Stack Developer.
            </Paragraph>
            <Paragraph>
                I mostly work with Python (Flask/Django) and ReactJS.
                I have over 5 years of commercial experience.
            </Paragraph>
            <Title level={5} style={{ textAlign: "center" }}>
                Things I like
            </Title>
            <Paragraph>
                <ul class="default">
                    <li>Play guitar</li>
                    <li>Play video games</li>
                    <li>Lead D&D parties</li>
                </ul>
            </Paragraph>
            <Title level={5} style={{ textAlign: "center" }}>
                Skill Stack
            </Title>
            <Paragraph>
                <ul class="default">
                    <li>Python</li>
                    <li>ReactJS (Redux/Ant Design/Bootstrap)</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Microsoft Azure</li>
                    <li>Google Cloud Platform</li>
                    <li>Windows 10</li>
                    <li>Linux (Ubuntu/Debian)</li>
                    <li>Docker</li>
                </ul>
            </Paragraph>
        </Typography>
    },
    {
        buttonTitle: "More",
        description: <Typography>
            <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
                Hello there! My name is Oleksii Hava.
            </Title>
            <Paragraph style={{ textAlign: "right", margin: "0 0 1em 0" }}>
                <small style={{color: "#888"}}>Pronounced as `O-Le-Xi Ha-Va`.</small>
            </Paragraph>
            <Paragraph>
                I currently work as Full Stack Developer at Honeycomb Software.
                I have more than 5 years of experience in software development, which
                includes 1.5 years of experience in game development, and remaining 4 years
                in web development.
            </Paragraph>
            <Title level={5} style={{ textAlign: "center" }}>
                Things I like
            </Title>
            <Paragraph>
                <ul class="more">
                    <li>Play guitar</li>
                    <p>
                        I can play 6-string, bass or ukulele! I like to play songs by Oasis and Blur, 
                        but the range of my music taste is pretty wide.
                    </p>
                    <li>Play video games</li>
                    <p>
                        My personal choice is Soulsborne series, I have hundreds of hours in Dark Souls 2, 3 and Elden Ring.
                        I absolutely appreciate Mount & Blade series, and I am currently playing Bannerlord.
                        In general, medieval and dark fantasy setting is my favorite.
                    </p>
                    <li>Lead D&D parties</li>
                    <p>
                        I enjoy playing Dungeons & Dragons with my friends. I am a DM for
                        one group, and I am also a player in another group. My character
                        is a quirky gnome druid from Sunless Swapms.
                    </p>
                </ul>
            </Paragraph>
            <Title level={5} style={{ textAlign: "center" }}>
                Skill Stack
            </Title>
            <Paragraph>
                <ul class="more">
                    <li>Python</li>
                    <p>
                        I mostly work with popular web frameworks - Flask and Django.
                    </p>
                    <li>ReactJS (Redux/Ant Design/Bootstrap)</li>
                    <p>
                        My frontend stack is ReactJS with Redux for state management and Ant Design for UI components.
                    </p>
                    <li>PostgreSQL</li>
                    <p>
                        I have been using PostgreSQL for about 4 years. I am using it for
                        my personal projects and at work, usually with Django ORM or Flask-SQLAlchemy.
                    </p>
                    <li>MongoDB</li>
                    <p>
                        For my personal projects I prefer MongoDB, because it is easy to set up
                        with Atlas Cloud and I usually use it in combination with Flask-MongoEngine.
                    </p>
                    <li>Microsoft Azure</li>
                    <p>
                        I am currently using Azure for my projects. I am using Azure Web Apps,
                        Azure Storage, Azure PostgresSQL Database and Azure Container Registry.
                    </p>
                    <li>Google Cloud Platform</li>
                    <p>
                        I have been using GCP for some projects. I am using GCP Cloud Run,
                        Cloud Functions, Cloud Storage, Cloud SQL, Pub/Sub.
                    </p>
                    <li>Windows 10</li>
                    <p>
                        I am currently using Windows 10 as my main OS. 
                        I prefer Windows 10 over 11, because I don't like the new UI.
                    </p>
                    <li>Linux (Ubuntu/Debian)</li>
                    <p>
                        I have been using Linux for about 2 years, specifically Ubuntu.
                    </p>
                    <li>Docker</li>
                    <p>
                        I have been using Docker for last 3 years, and I appreciate it so much
                        that I am using it for my personal projects.
                    </p>
                </ul>
            </Paragraph>
        </Typography>
    }
];


const Home = () => {
    const darkMode = useDarkMode();

    const [ description, setDescription ] = useState(1);

    return (
        <Layout>
            <Content
                style={{
                    background: darkMode.on ? "#02101d" : "white",
                    padding: "1rem"
                }}
            >
                <Card
                    title={<div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Space>
                            {
                                descriptions.map((desc, index) => (
                                    <Button
                                        type={index === description ? "primary" : "default"}
                                        shape="round"
                                        size="large"
                                        onClick={() => setDescription(index)}
                                    >
                                        {desc.buttonTitle}
                                    </Button>
                                ))
                            }
                        </Space>
                    </div>}
                >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ width: 768 }}>
                            {descriptions[description].description}
                        </div>
                    </div>
                </Card>
            </Content>
        </Layout>
    );
}

export default Home;
