import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[60px]",
  h2: "sm:text-[26px] md:text-[28px] text-[30px]",
  h3: "font-bold sm:text-[21px] md:text-[23px] text-[25px]",
  h4: "text-[20px]",
  h5: "font-normal text-[17px]",
  h6: "font-bold text-[16px]",
  body1: "font-normal text-[15px]",
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
