"use client";
import React from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

const { Dragger } = Upload;

type ButtonUploadProps = UploadProps & {
  isDragger?: boolean;
  buttonText?: string;
};

export const ButtonUpload: React.FC<ButtonUploadProps> = ({
  isDragger = false,
  buttonText = "Upload File",
  ...props
}) => {
  const handleChange: UploadProps["onChange"] = (info) => {
    const { status, name } = info.file;
    if (status === "done") {
      message.success(`${name} uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${name} upload failed.`);
    }
  };

  const defaultProps: UploadProps = {
    name: "file",
    multiple: true,
    onChange: handleChange,
    onDrop: (e) => console.log("Dropped files:", e.dataTransfer.files),
    ...props,
  };

  return isDragger ? (
    <Dragger {...defaultProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  ) : (
    <Upload {...defaultProps}>
      <Button icon={<UploadOutlined />} type="dashed">
        {buttonText}
      </Button>
    </Upload>
  );
};
