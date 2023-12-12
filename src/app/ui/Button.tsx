import React, { ComponentPropsWithoutRef } from "react";

const Button = ({ children, ...rest }: ComponentPropsWithoutRef<"button">) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
