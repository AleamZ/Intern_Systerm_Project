import React, { useState } from "react";
import { Form, Typography, Input, Button, Tabs, Row, Col, Image } from "antd";
import "antd/dist/reset.css"; // Reset Ant Design styles
import "./SignUpForm.css";
import Header from "../../components/header/Header.jsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import img7 from "../../assets/image-7.svg";

// Position Tab 
const PositionTab = () => (
    <Tabs
        defaultActiveKey="1"
        items={[
            {
                label: "Admin",
                key: "1",
            },
            {
                label: "Human Resources",
                key: "2",
            },
            {
                label: "Mentor",
                key: "3",
            },

            {
                label: "School",
                key: "4",
            },

            {
                label: "Intern",
                key: "5",
            },
        ]}
    />
);

//Sign Up Form
const SignUpForm = () => {
    const { t } = useTranslation();
    const nav = useNavigate();
    return (
        <Form layout="vertical" className="main-form">
            <Typography.Title className="title">Sign Up</Typography.Title>
            <Typography.Paragraph className="desc">
                {t("Please fill your detail to create your account.")}
            </Typography.Paragraph>
            <Form.Item
                label="Full Name"
                name={"fullname"}
                rules={[
                    {
                        required: true,
                        message: "Please enter your name.",
                    },
                ]}
            >
                <Input placeholder="Enter your full name" allowClear></Input>
            </Form.Item>

            <Form.Item
                label="Email"
                name={"email"}
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email!",
                    },
                ]}
            >
                <Input placeholder="youremail@example.com" allowClear></Input>
            </Form.Item>

            <Form.Item
                label="Password"
                name={"password"}
                rules={[
                    {
                        required: true,
                        message: "Please enter a valid password.",
                    },
                ]}
            >
                <Input.Password placeholder="Enter your password."></Input.Password>
            </Form.Item>

            <Form.Item
                label="Re-type Password"
                name={"re-password"}
                rules={[
                    {
                        required: true,
                        message: "Please enter a valid password.",
                    },
                ]}
            >
                <Input.Password placeholder="Re-enter your password"></Input.Password>
            </Form.Item>

            <Button type="default" htmlType="Submit" className="sign-up-btn">
                Sign Up
            </Button>

            <div className="move-login">
                <Typography.Paragraph className="ask-desc">
                    {t("Already have account?")}
                </Typography.Paragraph>
                <a
                    onClick={() => {
                        nav("/login");
                    }}
                    className="sign-in"
                    href=""
                >
                    Sign in
                </a>
            </div>
        </Form>
    );
};

// Main Page Sign Up
function MyComponent() {
    return (
        <>
            <div className="container">
                <Header />
                <main className="main-content">
                    <Row>
                        <Col span={8}>
                            <PositionTab />
                            <Row>
                                <Col>
                                    <SignUpForm />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Image
                                className="img"
                                src={img7}
                                alt="Sign Up"
                            ></Image>
                        </Col>
                    </Row>
                </main>
            </div>
        </>
    );
}

export default MyComponent;
