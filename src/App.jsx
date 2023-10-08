import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import {
  Textfield,
  Checkfield,
  Phonedropdown,
  Address,
  States,
  Checkbox,
  FileUpload,
  Declaration,
  ReCAPTCHA,
} from "./index.js";
import ButtonsAll from "./components/Buttons.component";
import Thankyou from "./components/Thankyou.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Thankyou />,
    children: [
      {
        path: "/Thankyou",
        element: <Thankyou />,
      },
    ],
  },
]);

function App() {
  //initial state of ReCaptcha
  const onChange = () => {};
  const [count, setCount] = useState(0);
  const [captchaVal, setCaptchaVal] = useState(null);
  //password Validation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Check if passwords match and update the passwordMatch state
    setPasswordMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    // Check if passwords match and update the passwordMatch state
    setPasswordMatch(password === newConfirmPassword);
  };

  //for Reseting everything except Captcha

  const [textInputValue, setTextInputValue] = useState("");

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const handleResetClick = () => {
    // setTextInputValue("");
    // //for captcha reset
    // setCaptchaKey(Math.random().toString());
    // setCaptchaVal(null);

    setTextInputValue("");
    setPassword("");
    setConfirmPassword("");
    // Reset the captcha
    setCaptchaKey(Math.random().toString());
    setCaptchaVal(null);
  };

  //for reset google captcha only

  const [captchaKey, setCaptchaKey] = useState(Math.random().toString());

  //for conditional rendering of route

  const [stateMessage, setStateMessage] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (!passwordMatch) {
      // If passwords do not match then prevent the form submission
      alert("Passwords do not match. Please check your passwords.");
      return;
    }
    setStateMessage(true);
    setTimeout(() => {
      setStateMessage(false);
      handleResetClick();
    }, 5000);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center w-screen min-h-screen border bg-cyan-300 p-[3rem]">
        <form
          action=""
          className="flex flex-col items-left w-[45%] h-auto p-10 bg-white min-w-1/2 border-t-4 border-gradient-to-br from-borderClr to-outlineClr"
          // onSubmit={(e) => e.preventDefault()}
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold text-center text-borderClr">
            STUDENT REGISTRATION FORM
          </h1>
          <br />
          <Textfield
            type={"text"}
            id={"firstName"}
            label={"First Name"}
            placeholder={"Enter First Name"}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Textfield
            type={"text"}
            id={"lastName"}
            label={"Last Name"}
            placeholder={"Enter Last Name"}
          />
          <br />

          <Checkfield label={"Gender"} />
          <br />
          <Textfield
            label={"Age"}
            maxLength={"2"}
            type={"text"}
            placeholder={"Enter your age"}
          />
          <br />
          <Textfield
            label={"Date of Birth"}
            type={"date"}
            minDate={"1990-01-01"}
            maxDate={"2023-01-01"}
            className={"forDatePadding"}
          />
          <br />
          <Textfield
            type={"email"}
            label={"Email Address"}
            placeholder={"Enter your email"}
          />
          <br />
          <Textfield
            type={"password"}
            label={"Password"}
            placeholder={"Enter your password min 8 characters"}
            name={"password"}
            id={"password"}
            onChange={handlePasswordChange}
            value={password}
            // onBlur={validatePassword}
            required
          />
          <br />
          <Textfield
            type={"password"}
            label={"Confirm Password"}
            placeholder={"Confirm password"}
            name={"confirm_password"}
            id={"confirm_password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            // onBlur={validatePassword}
            required
          />
          <br />
          <div className="w-full pl-[14rem]">
            {!passwordMatch && (
              <div className="font-bold text-borderClr">
                Passwords do not match
              </div>
            )}
          </div>
          <br />
          <Phonedropdown placeholder={"Enter your phone number"} />
          <br />
          <Address placeholder={"Enter your address"} label={"Address"} />
          <br />
          <States label={"State"} />
          <br />
          <Textfield label={"Pin Code"} placeholder={"Enter your pin code"} />
          <br />
          <Checkbox label={"Hobbies"} />
          <br />
          <FileUpload label={"Upload Photo"} />
          <br />
          <Declaration />
          <br />
          <ReCAPTCHA
            sitekey="6Le6LIQoAAAAAFv0sgPZqzT6u4wyLaP6fkfmS2bk"
            onChange={(val) => setCaptchaVal(val)}
            key={captchaKey}
          />
          <br />
          <ButtonsAll
            disabled={!captchaVal}
            handleResetClick={handleResetClick}
          />
          <br />
          {stateMessage && <RouterProvider router={router} />}
        </form>
      </main>
    </>
  );
}

export default App;
