import React, { useState } from "react";
import { Modal, Button, Typography, Row, Col, Select, Input } from "antd";
const { TextArea } = Input;
import { MailOutlined } from "@ant-design/icons";
import "./SendEmailButton.css";

const SendEmailButton = ({ showModal }) => {
    return (
        <div>
            {/* Button để mở modal */}
            <Button
                className="send-email-btn"
                key="submit"
                type="default"
                icon={<MailOutlined />}
                onClick={showModal}
            >
                Send Email
            </Button>
        </div>
    );
};

const DetailPopup = ({
    isModalVisible,
    handleCancel,
    enterLoading,
    loadings,
}) => {
    // Tạo hiệu ứng loading khi người dùng bấm vào nút send email
    const [value, setValue] = useState("");
    return (
        <div>
            {/* Modal */}
            <Modal
                title="Send Email"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button
                        className="send-email-btn"
                        key="submit"
                        type="default"
                        icon={<MailOutlined />}
                        loading={loadings[1] || false}
                        onClick={() => enterLoading(1)}
                    >
                        Send Email
                    </Button>,
                ]}
                width={700}
            >
                {/*Nội dung bên trong modal */}
                <Typography.Paragraph className="desc">
                    Choose types of Email
                </Typography.Paragraph>
                <Row gutter={16}>
                    <Col span={8}>
                        <Select
                            className="select-type-email"
                            placeholder="Types of Email"
                            options={[
                                {
                                    value: 1,
                                    label: "Email interview",
                                },
                                {
                                    value: 2,
                                    label: "Email result",
                                },
                                {
                                    value: 3,
                                    label: "Internship information",
                                },
                            ]}
                        />
                    </Col>
                    <Col span={16}>
                        <TextArea
                            className="textarea"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter your mail..."
                            autoSize={{
                                minRows: 6,
                                maxRows: 6,
                            }}
                        />
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

const MyComponent = () => {
    // Khởi tạo giá trị ban đầu là false  -> ẩn modal;
    const [isModalVisible, setIsModalVisible] = useState(false);
    // Hàm được gọi khi muốn hiển thị modal
    const showModal = () => {
        setIsModalVisible(true);
    };
    // Hàm được gọi khi muốn ẩn modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };
    return (
        <div>
            <SendEmailButton showModal={showModal} />
            <DetailPopup
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
                enterLoading={enterLoading}
                loadings={loadings}
                setLoadings={setLoadings}
            />
        </div>
    );
};

export default MyComponent;
