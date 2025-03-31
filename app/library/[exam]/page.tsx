"use client";
import { UploadFile } from "@/component/ui/upload-file";
import { PlusOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Tabs,
  Form,
  Upload,
  Row,
  Col,
  UploadFile as UploadFilePros,
} from "antd";
import React, { useState } from "react";
const { TabPane } = Tabs;

type AnswerProps = {
  id: string;
  questionNo: number;
  skill: "LISTENING" | "READING" | "SPEAKING" | "WRITING";
  examPart: "ONE" | "TWO" | "THREE" | "FOUR";
  type:
    | "MULTIPLE_CHOICE"
    | "FILL_THE_BLANK"
    | "SELECT_CORRECT_ANSWER"
    | "WRITING";
  options: string[];
  answer: string;
};

type QuestionProps = {
  id: string;
  skill: "LISTENING" | "READING" | "SPEAKING" | "WRITING";
  resource: UploadFilePros[];
};

type ExamRequestDto = {
  type: "TOEIC" | "IELTS";
  question: QuestionProps[];
  answer: AnswerProps[];
};

const Page = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAnswer, setOpenAnswer] = useState(false);
  const [form] = Form.useForm<ExamRequestDto>();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setOpenAnswer(true);
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Simulate an async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form values:", values);
      // Handle form submission
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button icon={<PlusOutlined />} type="primary" onClick={showDrawer}>
        Create Exam
      </Button>
      <Drawer
        title="Create Exam"
        placement="right"
        onClose={onClose}
        open={open}
        width="90%"
        height="100%"
        footer={
          <div style={{ textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              form="examForm"
              icon={<SaveOutlined />}
            >
              Save
            </Button>
          </div>
        }
      >
        <Form layout="vertical" onFinish={handleSubmit} id="examForm">
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Listening" key="1">
              <Form.Item name="audio" className="flex justify-center">
                <Upload accept=".mp3,.wav">
                  <Button
                    icon={<UploadOutlined />}
                    type="dashed"
                    className="w-[150px]"
                  >
                    Upload Audio
                  </Button>
                </Upload>
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <UploadFile />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Speaking" key="2"></TabPane>
            <TabPane tab="Reading" key="3"></TabPane>
            <TabPane tab="Writing" key="4"></TabPane>
          </Tabs>
        </Form>
      </Drawer>
    </>
  );
};

export default Page;
