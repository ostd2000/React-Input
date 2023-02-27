import "./App.scss";

import PasswordIcon from "@mui/icons-material/Password";

import InputC from "./InputC";

function App() {
    return (
        <div className="app">
            <div className="app_c1">
                <InputC
                    rtl
                    type="text"
                    placeholder="نام کاربری"
                    primary
                    lowContrast
                    filled
                    outlined
                    elevation={900}
                >
                    نام کاربری
                </InputC>

                <InputC
                    rtl
                    type="password"
                    placeholder="رمز عبور"
                    primary
                    lowContrast
                    filled
                    outlined
                    elevation={900}
                    icon={<PasswordIcon />}
                    required
                >
                    رمز عبور
                </InputC>

                <InputC
                    rtl
                    type="password"
                    placeholder="رمز عبور"
                    danger
                    filled
                    outlined
                    elevation={900}
                    icon={<PasswordIcon />}
                    errMsg="این نام کاربری از قبل موجود می باشد"
                >
                    نام کاربری
                </InputC>

                <InputC
                    rtl
                    type="text"
                    placeholder="رمز عبور"
                    primary
                    lowContrast
                    filled
                    outlined
                    large
                    elevation={900}
                    icon={<PasswordIcon />}
                    required
                >
                    نام کاربری
                </InputC>
            </div>
        </div>
    );
}

export default App;
