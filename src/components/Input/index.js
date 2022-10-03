import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray400: "bg-gray_101 border border-gray_400 border-solid",
  FillWhiteA700: "bg-white_A700",
  OutlineGray4001_2: "bg-gray_101 border border-gray_400 border-solid",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder16: "rounded-radius16",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "3xl:pb-[10px] lg:pb-[6px] xl:pb-[8px] pb-[9px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] lg:pt-[9px] 3xl:px-[10px] lg:px-[6px] xl:px-[8px] px-[9px]",
  lg: "xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pb-[9px] lg:pt-[13px] xl:pt-[16px] pt-[19px] 3xl:pt-[22px] xl:px-[12px] px-[14px] 3xl:px-[16px] lg:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder16"]),
  variant: PropTypes.oneOf([
    "OutlineGray400",
    "FillWhiteA700",
    "OutlineGray4001_2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineGray400",
  size: "",
};

export { Input };
