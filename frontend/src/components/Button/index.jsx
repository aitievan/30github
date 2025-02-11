import React from "react";
import PropTypes from "prop-types";

const shapes ={
    square: "rounded-[0px]",
    round : "rounded-[16px],"
};
const variants= {
    gradient: {
        light_blue_A700_01_light_blue_800: "bg-gradient5 text-white-a700",
    },
    fill: {
        blue_100:"bg-blue-100 text-gray-50",
        white_A700: "bg-white-a700 text-gray-900_02",
        gray_100_02: "bg-gray-100_02 shadow-xs",
    },
};
const sizes={
    lg:"h-[90px] pl-[30px] pr-[34px] text-[21px]",
    md: "h-[52px] px-[34px] text-[17px]",
    sm: "h-[42px] px-[34px] text-[17px]",
    xs: "h-[34px]",
};

const Button=({
    children,
    className= "",
    leftIcon,
    rightIcon,
    shape,
    variant="fill",
    size="xs"
    color ="gray_100_02",
    ...restProps
}) =>{
    return(
        <button 
        className={`$ {className} flex flex-row items-center jusify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variants[variant]?.[color]} `}
        { ... restProps}
        >
           {!!leftIcon && leftIcon}
           {children}
           {!!rightIcon && rightIcon} 
        </button>
    );
};

Button.propTypes={
    className:PropTypes.string,
    children: PropTypes.node,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    shape:PropTypes.oneOf(["square","round"]),
    size:PropTypes.oneOf(["lg","md","sm","xs"]),
    variant:PropTypes.oneOf(["gradient","fill"]),
    color:PropTypes.oneOf(["light_blue_A700_01_light_blue_800","blue_100","white_A700","gray_100_02"]),
};
export{Button};