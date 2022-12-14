import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[62px] xl:text-[71px] text-[80px] 3xl:text-[96px]",
  h2: "lg:text-[49px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h3: "font-extrabold lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h4: "font-normal lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h5: "lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h6: "font-black lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  body1: "lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body2:
    "font-normal lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body3:
    "font-normal lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body4:
    "font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body5: "lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body6: "lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body7: "lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]",
  body8: "lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px]",
  body9: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
