import React, { useState, useEffect, useRef } from "react";
import "./InputC.scss";

import APP_COLORS from "./consts/colorConsts";
import APP_FONTS from "./consts/fontConsts";

const InputC = ({
    children,
    id,
    type,
    primary,
    secondary,
    danger,
    disabled,
    filled,
    underlined,
    outlined,
    dashed,
    errMsg,
    sharpEdge,
    icon,
    opt,
    medium,
    large,
    elevation,
    showPasswordIcon,
    hidePasswordIcon,
    ...otherProps
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const showPasswordRef = useRef();

    useEffect(() => {
        if (type === "password") {
            setIsPassword(true);
        }
    }, [type]);

    const showPasswordOnClick = () => {
        setShowPassword(!showPassword);

        console.log(showPasswordRef.current);

        if (showPasswordRef.current.type === "password") {
            showPasswordRef.current.type = "text";

            return;
        }

        showPasswordRef.current.type = "password";
    };

    let inputContainerStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    };

    let labelStyles = {
        fontSize: APP_FONTS.FONT_SIZE_200,
        color: APP_COLORS.COLOR_TXT_200,
    };

    let inputContainer2Styles = {
        position: "relative",
        marginTop: "5px",
    };

    let inputStyles = {
        width: "30rem",
        height: "3.5rem",

        fontSize: APP_FONTS.FONT_SIZE_100,

        border: "none",
        borderRadius: "5px",

        color: APP_COLORS.COLOR_TXT_300,
        padding: "1.2rem 1.2rem",
    };

    let errStyles = {
        fontSize: APP_FONTS.FONT_SIZE_100,

        border: `1px solid ${APP_COLORS.COLOR_DANGER}`,
        borderRadius: "5px",
        backgroundColor: APP_COLORS.COLOR_DANGER_OUTLINED,
        color: APP_COLORS.COLOR_DANGER,
        padding: "3px 1rem",
        marginTop: "1rem",
    };

    let inputBackgroundColor;
    switch (elevation) {
        case 100:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_100;
            break;
        case 200:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_200;
            break;
        case 300:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_300;
            break;
        case 400:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_400;
            break;
        case 500:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_500;
            break;
        case 600:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_600;
            break;
        case 700:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_700;
            break;
        case 800:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_800;
            break;
        case 900:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_900;
            break;
        default:
            inputBackgroundColor = APP_COLORS.COLOR_PRIMARY_900;
    }

    let inputColor;
    if (primary) {
        inputColor = APP_COLORS.COLOR_PRIMARY;
    }

    if (secondary) {
        inputColor = APP_COLORS.COLOR_SECONDARY;
    }

    if (danger) {
        inputColor = APP_COLORS.COLOR_DANGER;
    }

    if (disabled) {
        inputColor = APP_COLORS.COLOR_DISABLED;
    }

    if (filled) {
        inputStyles = {
            ...inputStyles,
            backgroundColor: inputBackgroundColor,
        };
    }

    if (underlined) {
        inputStyles = {
            ...inputStyles,
            backgroundColor: "transparent",
            borderBottom: `1px solid ${inputColor}`,
        };
    }

    if (outlined) {
        inputStyles = {
            ...inputStyles,
            border: `1px solid ${inputColor}`,
        };
    }

    if (dashed) {
        inputStyles = {
            ...inputStyles,
            border: `1px dashed ${inputColor}`,
        };
    }

    if (sharpEdge) {
        inputStyles = {
            ...inputStyles,
            borderRadius: "none",
        };
    }

    if (medium) {
        inputStyles = {
            ...inputStyles,
            width: "50rem",
        };
    }

    if (large) {
        inputStyles = {
            ...inputStyles,
            width: "70rem",
        };
    }

    if (icon) {
        inputStyles = {
            ...inputStyles,
            paddingLeft: "3rem",
        };
    }

    return (
        <div className="input-c" style={inputContainerStyles}>
            <label className="input-c__label" htmlFor={id} style={labelStyles}>
                {children}
            </label>
            <span className="input-c__c1" style={inputContainer2Styles}>
                <span className="input-c__icon">{icon}</span>
                <input
                    className="input-c__input"
                    id={id}
                    ref={showPasswordRef}
                    type={type}
                    style={inputStyles}
                    {...otherProps}
                />

                {isPassword && (
                    <span
                        className="input-c__password-icon"
                        onClick={showPasswordOnClick}
                    >
                        {showPassword ? hidePasswordIcon : showPasswordIcon}
                    </span>
                )}
            </span>
            {danger && <span style={errStyles}>{errMsg}</span>}
        </div>
    );
};

export default InputC;
