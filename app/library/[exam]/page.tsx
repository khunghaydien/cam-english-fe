"use client";
import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Tabs,
  Form,
  UploadFile as UploadFilePros,
  Row,
  Col,
} from "antd";
import React, { useState } from "react";
import { UploadFile as AntdUploadFile } from "antd/es/upload/interface";
import { ButtonUpload } from "@/component/ui/button";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

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
  const [form] = Form.useForm<ExamRequestDto>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: ExamRequestDto) => {};

  const handleFileUpload = (file: AntdUploadFile) => {
    const url = URL.createObjectURL(file.originFileObj as Blob);
    setFileUrl(url);
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
          <Tabs
            defaultActiveKey="1"
            type="card"
            items={[
              {
                key: "1",
                label: "Listening",
                children: (
                  <>
                    <Row justify="center" className="mb-4">
                      <ButtonUpload isDragger={false} accept=".mp3,.wav" />
                    </Row>
                    <Row gutter={[16, 16]}>
                      <Col span={12} className="h-[calc(100vh-273px)]">
                        {fileUrl ? (
                          <div className="h-full max-h-[calc(100vh-273px)]">
                            <Worker
                              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                            >
                              <Viewer fileUrl={fileUrl} />
                            </Worker>
                          </div>
                        ) : (
                          <ButtonUpload
                            isDragger={true}
                            accept=".pdf"
                            onChange={(info) => handleFileUpload(info.file)}
                          />
                        )}
                      </Col>
                      <Col span={12}></Col>
                    </Row>
                  </>
                ),
              },
              {
                key: "2",
                label: "Speaking",
                children: <div>Speaking Content</div>,
              },
              {
                key: "3",
                label: "Reading",
                children: <div>Reading Content</div>,
              },
              {
                key: "4",
                label: "Writing",
                children: <div>Writing Content</div>,
              },
            ]}
          />
        </Form>
      </Drawer>
    </>
  );
};

export default Page;
