import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  CircleBorder35: "rounded-radius35",
  RoundedBorder12: "rounded-radius12",
  icbCircleBorder16: "rounded-radius16",
};
const variants = {
  OutlineGray400:
    "bg-white_A700 border-bw15 border-gray_400 border-solid text-gray_801",
  FillWhiteA700: "bg-white_A700",
  FillBlueA100: "bg-blue_A100 text-blue_50",
  FillGray900: "bg-gray_900 text-white_A700",
  OutlineBlack900:
    "bg-gray_101 border-black_900 border-bw15 border-solid text-black_900",
  FillGray500: "bg-gray_500 text-white_A700",
  OutlineGray4001_2:
    "bg-white_A700 border border-gray_400 border-solid text-white_A700",
  FillYellowA400: "bg-yellow_A400 text-gray_800",
  icbFillLightgreen800: "bg-light_green_800",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  lg: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xl: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  "2xl": "lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
  smIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "CircleBorder35",
    "RoundedBorder12",
    "icbCircleBorder16",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray400",
    "FillWhiteA700",
    "FillBlueA100",
    "FillGray900",
    "OutlineBlack900",
    "FillGray500",
    "OutlineGray4001_2",
    "FillYellowA400",
    "icbFillLightgreen800",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
