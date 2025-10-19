import React, { type ReactNode } from "react";
import { Form, Input, type FormItemProps } from "antd";


interface ReusableFormItemProps extends FormItemProps {
  placeholder?: string;
  inputType?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  erroReasons?: string;
  max?: number;
  vertical?: boolean;
  prefix?: React.ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
  noMargin?: boolean;
  label?:ReactNode
}

const CustomInput: React.FC<ReusableFormItemProps> = ({
  label,
  name,
  rules = [],
  placeholder,
  inputType = "text",
  inputClassName = "h-[43px]",
  style = { width: "100%", textAlign: "left" },
  onChange,
  value,
  erroReasons,
  max,
  vertical,
  prefix,
  readOnly,
  disabled,
  onBlur,
  className,
  noMargin,
  ...restProps
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      style={style}
      rules={rules}
      {...restProps}
      preserve={false}
      {...(vertical
        ? { labelCol: { span: 24 }, wrapperCol: { span: 24 } }
        : {})}
    >
      <Input
        readOnly={label === "Personal Email"}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`placeholder:text-[#344054] ${inputClassName} ${erroReasons ? "border-red-500" : ""}`}
        type={inputType}
        placeholder={placeholder}
        maxLength={max}
        prefix={prefix}
      />
    </Form.Item>
  );
};

export default CustomInput;
