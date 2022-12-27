import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  OutlineBlack90072: "bg-pink_A200 shadow-bs2 text-bluegray_50",
  OutlineBlack90070: "bg-cyan_700 shadow-bs1 text-white_A700",
  OutlineBlack900ce: "bg-pink_A200 shadow-bs3 text-white_A700",
  OutlineGray90066: "bg-cyan_700 shadow-bs5 text-white_A700",
  OutlineBlack901: "bg-pink_A200 shadow-bs4 text-bluegray_50",
  OutlineBluegray3002b: "bg-cyan_700 shadow-bs text-white_A700",
  icbOutlineCyan700: "border-2 border-cyan_700 border-solid",
};
const sizes = {
  sm: "p-[12px] sm:p-[7px] md:p-[9px]",
  md: "md:p-[13px] p-[17px] sm:px-[15px] sm:py-[10px]",
  smIcn: "sm:p-[3px] md:p-[4px] p-[6px]",
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
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf(["RoundedBorder5", "icbCircleBorder20"]),
  variant: PropTypes.oneOf([
    "OutlineBlack90072",
    "OutlineBlack90070",
    "OutlineBlack900ce",
    "OutlineGray90066",
    "OutlineBlack901",
    "OutlineBluegray3002b",
    "icbOutlineCyan700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "OutlineBlack90072",
  size: "md",
};

export { Button };
