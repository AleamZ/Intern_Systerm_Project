import React, { useState } from "react";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Tabs,
    Typography,
    Image,
    Row,
    Col,
} from "antd";
import "antd/dist/reset.css"; // Reset Ant Design styles
import img7 from "../../assets/image-7.svg";
import "./LoginForm.css";
import Header from "../../components/header/Header.jsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Position Tab
const PositionTab = ({ activeTab, setActiveTab }) => (
    <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
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
// Login Form
const LoginForm = ({ activeTab }) => {
    const { t } = useTranslation();
    const nav = useNavigate();

    const tabTitles = {
        1: "Admin",
        2: "Human Resources",
        3: "Mentor",
        4: "School",
        5: "Intern",
    };
    return (
        <Form layout="vertical" className="main-form">
            <Typography.Title className="title">
                {tabTitles[activeTab]} Login
            </Typography.Title>
            <Typography.Paragraph className="desc">
                {t("Please fill your detail to create your account.")}
            </Typography.Paragraph>
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

            <div className="form-item-check">
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox className="remember-me">Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <a
                        className="login-form-forgot"
                        href=""
                        onClick={() => {
                            nav("/pwdreset");
                        }}
                    >
                        Forgot password?
                    </a>
                </Form.Item>
            </div>

            <Button type="default" htmlType="Submit" className="sign-in-btn">
                Sign In
            </Button>

            <Button
                type="default"
                onClick={() => {
                    nav("/signup");
                }}
                className="signup-btn"
            >
                Sign Up
            </Button>

            <Typography.Paragraph className="other-login-desc">
                OR LOGIN WITH
            </Typography.Paragraph>

            <Button type="default" icon={<MySvgIcon />} className="google-btn">
                Google
            </Button>
        </Form>
    );
};

// Google img
const MySvgIcon = () => (
    <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
            fill="#FFC107"
        />
        <path
            d="M3.65302 7.3455L6.93851 9.755C7.82752 7.554 9.98052 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.65902 2 5.32802 4.1685 3.65302 7.3455Z"
            fill="#FF3D00"
        />
        <path
            d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.0717 17.5742 13.8037 18.001 12.5 18C9.89897 18 7.69047 16.3415 6.85847 14.027L3.59747 16.5395C5.25247 19.778 8.61347 22 12.5 22Z"
            fill="#4CAF50"
        />
        <path
            d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
            fill="#1976D2"
        />
    </svg>
);

// Main Page Login
function MyComponent() {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <>
            <div className="container">
                <Header />
                <main className="main-content">
                    <Row>
                        <Col span={8}>
                            <PositionTab
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            <Row>
                                <LoginForm activeTab={activeTab} />
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Image
                                className="img"
                                src={img7}
                                alt="Login"
                            ></Image>
                        </Col>
                    </Row>
                </main>
            </div>
        </>
    );
}

export default MyComponent;
