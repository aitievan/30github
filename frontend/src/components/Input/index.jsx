"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700 text-blue_gray-100",
  },
};

const sies = {
  xs: "h-[52px] px-4 text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={` ${className} flex items-center justify-center sm:w-full cursor-text text-blue_gray-100 tracking-[-0.24px] text-[16.17px] border-white-a700 border border-solid bg-white-a700 rounded-[12px] $ {shape && shapes[shape]} ${
          variant && (variants[variant]?.[color] || variants[variant])
        } $ {size && sizes[size]} `}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);
Input.propTypes={
    className:PropTypes.string,
    name:PropTypes.string,
    placeholder:PropTypes.string,
    type: PropTypes.string,
    label:PropTypes.string,
    prefix:PropTypes.node,
    suffix:PropTypes.node,
    shape:PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant:PropTypes.oneOf(["fill"]),
    color:PropTypes.oneOf(["white_A700"]),
    
};

export {Input};
