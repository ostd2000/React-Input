import React, { useState, useRef } from "react";
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
    const inputRef = useRef();

    let styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    };

    let labelStyles = {
        fontSize: APP_FONTS.FONT_SIZE_200,
        color: APP_COLORS.COLOR_TXT_200,
    };

    let c1Styles = {
        position: "relative",
        marginTop: "5px",
    };

    let iconStyles = {
        position: "absolute",
        top: "1.2rem",
    };

    let inputStyles = {
        width: "30rem",
        height: "4rem",

        border: "none",
        borderRadius: "3px",
        color: APP_COLORS.COLOR_TXT_300,
        padding: "1.2rem 1.2rem",
    };

    let requiredStyles = {
        position: "absolute",
        top: "1.2rem",
        fontSize: APP_FONTS.FONT_SIZE_400,
        color: APP_COLORS.COLOR_DANGER,
    };

    let passwordIconStyles = {
        position: "absolute",
        top: "1.2rem",
    };

    let dangerStyles = {
        fontSize: APP_FONTS.FONT_SIZE_100,

        borderRadius: "3px",

        color: APP_COLORS.COLOR_DANGER,
        padding: "3px 1rem",
        marginTop: "1rem",
    };

    const [showPassword, setShowPassword] = useState(false);

    let inputBackgroundColor;
    let inputColor;

    // LC : Low Contrast
    let LC;

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

        dangerStyles = {
            ...dangerStyles,
            border: `1px solid ${APP_COLORS.COLOR_DANGER}`,

            backgroundColor: APP_COLORS.COLOR_DANGER_BACKGROUND,
        };
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
        inputStyles = {
            ...inputStyles,
            backgroundColor: inputBackgroundColor,
        };
    }

    if (!filled) {
        inputStyles = {
            ...inputStyles,
            backgroundColor: "trasnparent",
        };
    }

    if (underlined) {
        inputStyles = {
            ...inputStyles,
            backgroundColor: "transparent",
            borderBottom: `2px solid ${inputColor}`,
        };
    }

    if (outlined) {
        inputStyles = {
            ...inputStyles,
            border: `2px solid ${inputColor}`,
        };
    }

    if (dashed) {
        inputStyles = {
            ...inputStyles,
            border: `2px dashed ${inputColor}`,
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

    if (rtl) {
        if (icon) {
            inputStyles = {
                ...inputStyles,
                paddingRight: "3rem",
            };

            iconStyles = {
                ...iconStyles,
                right: "1rem",
            };
        }

        if (type === "password") {
            passwordIconStyles = {
                ...passwordIconStyles,
                left: "1rem",
            };
        }

        if (required) {
            requiredStyles = {
                ...requiredStyles,
                left: "-2rem",
            };
        }
    }

    if (!rtl) {
        if (icon) {
            inputStyles = {
                ...inputStyles,
                paddingLeft: "3rem",
            };

            iconStyles = {
                ...iconStyles,
                left: "1rem",
            };
        }

        if (type === "password") {
            passwordIconStyles = {
                ...passwordIconStyles,
                right: "1rem",
            };
        }

        if (required) {
            requiredStyles = {
                ...requiredStyles,
                right: "-2rem",
            };
        }
    }

    const showPasswordOnClick = () => {
        setShowPassword(!showPassword);

        if (inputRef.current.type === "password") {
            inputRef.current.type = "text";

            return;
        }

        inputRef.current.type = "password";
    };

    return (
        <div className="input-c" style={styles}>
            {children && (
                <label
                    className="input-c__label"
                    htmlFor={id}
                    style={labelStyles}
                >
                    {children}
                </label>
            )}

            <span className="input-c__c1" style={c1Styles}>
                {icon && (
                    <span className="input-c__icon" style={iconStyles}>
                        {icon}
                    </span>
                )}

                <input
                    className={`input-c__input ${className}`}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    ref={inputRef}
                    style={inputStyles}
                    {...otherProps}
                />

                {required && (
                    <span className="input-c__required" style={requiredStyles}>
                        *
                    </span>
                )}

                {type === "password" && (
                    <span
                        className="input-c__password-icon"
                        style={passwordIconStyles}
                        onClick={showPasswordOnClick}
                    >
                        {showPassword ? (
                            <span>
                                <VisibilityIcon />
                            </span>
                        ) : (
                            <span>
                                <VisibilityOffIcon />
                            </span>
                        )}
                    </span>
                )}
            </span>

            {danger && errMsg ? (
                <span className="input-c__danger" style={dangerStyles}>
                    {errMsg}
                </span>
            ) : null}
        </div>
    );
};

export default InputC;
