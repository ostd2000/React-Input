import "./App.scss";

import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import InputC from "./InputC";

function App() {
    return (
        <div className="app">
            <div className="app_c1">
                <InputC
                    type="text"
                    primary
                    filled
                    outlined
                    elevation={900}
                    icon={<PasswordIcon />}
                >
                    First name
                </InputC>

                <InputC
                    type="text"
                    danger
                    filled
                    outlined
                    elevation={900}
                    errMsg="This username does not exist."
                >
                    Username
                </InputC>

                <InputC
                    type="password"
                    primary
                    filled
                    outlined
                    elevation={900}
                    showPasswordIcon={<VisibilityIcon />}
                    hidePasswordIcon={<VisibilityOffIcon />}
                >
                    Something
                </InputC>
            </div>
        </div>
    );
}

export default App;
