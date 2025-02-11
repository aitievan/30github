"use client";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-gray-500_01 border border-solid checked:border-gray-500_01 checked:border-[3px] checked:border-solid checked:bg-gray-500_01 checked:focus:border-gray-500_01 checked:hover:bg-gray-500_01 checked:hover:border-gray-500_01",
};
const sizes = {
  xs: "h-[20px] w-[20px] rounded",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div
          className={className + "flex items-center gap-[5px] cursor-pointer"}
        >
          <input
            className={` $ {(size && sizes[size]) || "}  ${
              (variant && variants[variant]) || " "
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
