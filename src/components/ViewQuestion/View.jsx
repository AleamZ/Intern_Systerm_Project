import React, { useState } from "react";
import { DatePicker, TimePicker, Button, Modal, Input } from "antd";
import { Tabs } from "antd";
import "./View.css";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Intern",
    children: (
      <div className="tab-content">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 1</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 2</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 3</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          </div>

          <div>
            Add Question

          </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Fresher",
  children: (
      <div className="tab-content">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 1</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 2</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 3</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          </div>

          <div>
            Add Question
            
          </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Junior",
    children: (
      <div className="tab-content">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 1</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 2</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 3</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          </div>

          <div>
            Add Question
            
          </div>
      </div>
    ),
  },
  {
    key: "4",
    label: "Middle",
    children: (
      <div className="tab-content">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 1</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 2</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 3</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          </div>

          <div>
            Add Question
            
          </div>
      </div>
    ),
  },
  {
    key: "5",
    label: "Senior",
    children: (
      <div className="tab-content">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 1</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 2</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Question 3</label>
          <Input
                style={{
                  width: "420px",
                  height: "70px",
                }}
              />
          </div>

          </div>

          <div>
            Add Question
            
          </div>
      </div>
    ),
  },
];

const View = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          background: "white",
          color: "blue",
          border: "1px solid blue",
          borderRadius: "15px",
        }}
      >
        View
      </Button>

      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1448}
        height={447}
        footer={[]}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Modal>
    </>
  );
};

export default View;
