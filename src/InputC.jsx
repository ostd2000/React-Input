import React, { useState, useEffect, useRef } from "react";
import "./InputC.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { APP_COLORS, APP_FONTS } from "./consts/generalConsts";

const InputC = ({
    children,
    id,
    className,
    type,
    rtl,
    placeholder,
    primary,
    secondary,
    danger,
    lowContrast,
    disabled,
    filled,
    underlined,
    outlined,
    dashed,
    errMsg,
    sharpEdge,
    icon,
    medium,
    large,
    elevation,
    required,
    opt,
    ...otherProps
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputCRef = useRef();

    // This doesn't work: "inputCRef.current.style" is undefined at this point.
    // const inputCRefStyle = inputCRef.current.style;

    const inputCLabelRef = useRef();
    const inputCC1Ref = useRef();
    const inputCIconRef = useRef();
    const inputCInputRef = useRef();
    const inputCPasswordIconRef = useRef();
    const inputCDangerRef = useRef();
    const inputCRequiredRef = useRef();

    let inputBackgroundColor;
    let inputColor;

    // LC : Low Contrast
    let LC;

    // Styles that are not concerned about enteries.
    useEffect(() => {
        inputCRef.current.style.display = "flex";
        inputCRef.current.style.flexDirection = "column";
        inputCRef.current.style.alignItems = "flex-start";

        inputCLabelRef.current.style.fontSize = APP_FONTS.FONT_SIZE_200;
        inputCLabelRef.current.style.color = APP_COLORS.COLOR_TXT_200;

        inputCC1Ref.current.style.position = "relative";
        inputCC1Ref.current.style.marginTop = "5px";

        inputCIconRef.current.style.position = "absolute";
        inputCIconRef.current.style.top = "1.2rem";

        inputCInputRef.current.style.width = "30rem";
        inputCInputRef.current.style.height = "4rem";
        inputCInputRef.current.style.border = "none";
        inputCInputRef.current.style.borderRadius = "3px";
        inputCInputRef.current.style.color = APP_COLORS.COLOR_TXT_300;
        inputCInputRef.current.style.padding = "1.2rem 1.2rem";

        inputCPasswordIconRef.current.style.position = "absolute";
        inputCPasswordIconRef.current.style.top = "1.2rem";

        inputCDangerRef.current.style.fontSize = APP_FONTS.FONT_SIZE_100;
        inputCDangerRef.current.style.borderRadius = "3px";
        inputCDangerRef.current.style.color = APP_COLORS.COLOR_DANGER;
        inputCDangerRef.current.style.padding = "3px 1rem";
        inputCDangerRef.current.style.marginTop = "1rem";

        inputCRequiredRef.current.style.position = "absolute";
        inputCRequiredRef.current.style.top = "1.2rem";
        inputCRequiredRef.current.style.fontSize = APP_FONTS.FONT_SIZE_400;
        inputCRequiredRef.current.style.color = APP_COLORS.COLOR_DANGER;

        if (primary) {
            inputColor = APP_COLORS.COLOR_PRIMARY;
            LC = APP_COLORS.COLOR_PRIMARY_0;
        }

        if (secondary) {
            inputColor = APP_COLORS.COLOR_SECONDARY;

            // Add this later
            // LC = ...
        }

        if (danger) {
            inputColor = APP_COLORS.COLOR_DANGER;

            inputCDangerRef.current.style.border = `1px solid ${APP_COLORS.COLOR_DANGER}`;

            inputCDangerRef.current.style.backgroundColor =
                APP_COLORS.COLOR_DANGER_BACKGROUND;
        }

        if (disabled) {
            inputColor = APP_COLORS.COLOR_DISABLED;
        }

        if (lowContrast) {
            inputColor = LC;
        }

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

        if (filled) {
            inputCInputRef.current.style.backgroundColor = inputBackgroundColor;
        }

        if (!filled) {
            inputCInputRef.current.style.backgroundColor = "transparent";
        }

        if (underlined) {
            inputCInputRef.current.style.backgroundColor = "transparent";
            inputCInputRef.current.style.borderBottom = `2px solid ${inputColor}`;
        }

        if (outlined) {
            inputCInputRef.current.style.border = `2px solid ${inputColor}`;
        }

        if (dashed) {
            inputCInputRef.current.style.border = `2px dashed ${inputColor}`;
        }

        if (sharpEdge) {
            inputCInputRef.current.style.borderRadius = "none";
        }

        if (medium) {
            inputCInputRef.current.style.width = "50rem";
        }

        if (large) {
            inputCInputRef.current.style.width = "70rem";
        }

        if (rtl) {
            if (icon) {
                inputCInputRef.current.style.paddingRight = "3rem";

                inputCIconRef.current.style.right = "1rem";
            }

            if (type === "password") {
                inputCPasswordIconRef.current.style.left = "1rem";
            }

            if (required) {
                inputCRequiredRef.current.style.left = "-2rem";
            }
        }

        if (!rtl) {
            if (icon) {
                inputCInputRef.current.style.paddingLeft = "3rem";

                inputCIconRef.current.style.left = "1rem";
            }

            if (type === "password") {
                inputCPasswordIconRef.current.right = "1rem";
            }

            if (required) {
                inputCRequiredRef.current.style.right = "-2rem";
            }
        }
    }, []);

    const showPasswordOnClick = () => {
        setShowPassword(!showPassword);

        if (inputCInputRef.current.type === "password") {
            inputCInputRef.current.type = "text";

            return;
        }

        inputCInputRef.current.type = "password";
    };

    return (
        <div className="input-c" ref={inputCRef}>
            <label className="input-c__label" htmlFor={id} ref={inputCLabelRef}>
                {children}
            </label>
            <span className="input-c__c1" ref={inputCC1Ref}>
                <span className="input-c__icon" ref={inputCIconRef}>
                    {icon}
                </span>
                <input
                    className={`input-c__input ${className}`}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    // ref={showPasswordRef}
                    ref={inputCInputRef}
                    {...otherProps}
                />
                <span className="input-c__required" ref={inputCRequiredRef}>
                    {required && <span>*</span>}
                </span>

                {/* 
                This doesn't work, because the very first moment that the "render" method executes, we don't have a "<span>" yet
                so "passwordIconRef" would be undefined.
                This is a bad practice, the good practice is to always have the tag and determine its content via checking some state or something else. 
                */}
                {/* {isPassword && (
                    <span
                        className="input-c__password-icon"
                        ref={passwordIconRef}
                        onClick={showPasswordOnClick}
                    >
                        {showPassword ? (
                            <VisibilityIcon />
                        ) : (
                            <VisibilityOffIcon />
                        )}
                    </span>
                )} */}

                <span
                    className="input-c__password-icon"
                    ref={inputCPasswordIconRef}
                    onClick={showPasswordOnClick}
                >
                    {type === "password" &&
                        (showPassword ? (
                            <VisibilityIcon />
                        ) : (
                            <VisibilityOffIcon />
                        ))}
                </span>
            </span>

            <span className="input-c__danger" ref={inputCDangerRef}>
                {danger && errMsg}
            </span>
        </div>
    );
};

export default InputC;
