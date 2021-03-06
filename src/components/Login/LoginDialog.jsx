import React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { authenticateSignup,authenticateLogin } from "../../service/api";
import './LoginDialog.css'

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
    maxWidth: "unset !important",
  },
  image: {
    backgroundImage: `url(${"loginImg.jpg"})`,
    background: "white",
    backgroundPosition: "center 30%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  loginbtn: {
    textTransform: "none",
    background: "rgb(78,163,239)",
    color: "#fff",
    height: 48,
    borderRadius: 2,
    fontSize:16,
    "&:hover": {
      background: " rgb(112,181,242)",
      fontWeight: "bold",
    },
  },

  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  username: "",
  password: "",
};

const accountInitialValues = {
  loginHiring: {
    view: "loginHiring",
    heading: "Company Login",
    subHeading:
      "Get access to university database and hire a perfect candidate for you",
  },
  loginStudent: {
    view: "loginStudent",
    heading: "University Login",
    subHeading:
      "Find a perfect and flexible working environment among 1500+ registered firms",
  },
};

const LoginDialog = ({ Open, setOpen }) => {
  const classes = useStyle();
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.loginHiring);

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    // let response = await authenticateLogin(login);
    const response = { data: "" };
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      // setAccount(login.username);
    }
  };

  const signupUser = async () => {
    // let response = await authenticateSignup(signup);
    const response = { data: "" };
    if (!response) return;
    handleClose();
    // setAccount(signup.username);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.loginStudent);
  };
  const toggleLogin = () => {
    toggleAccount(accountInitialValues.loginHiring);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.loginHiring);
  };

  return (
    <Dialog open={Open} onClose={handleClose}>
      <DialogContent className='component'>
        <div style={{ display: "flex" }}>
          <div className='image'>
            <p
              style={{
                marginTop: -44,
                textAlign: "center",
                fontSize: 28,
                fontFamily: "cursive",
              }}
            >
              {account.heading}
            </p>
          </div>
          {account.view === "loginHiring" ? (
            <div className='login'>
              <p style={{ marginTop: 10, color: "#979391",fontWeight:'bold' }}>
                {account.subHeading}
              </p>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter email/Mobile number"
                style={{margin:'12px 0px'}}
              />
              {error && (
                <p className='error'>
                  Please enter your company mail ID{" "}
                </p>
              )}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter password"
              />
              <p className='text'>
                INDOplacements provides real recruitment drives with a unique
                Pre-selection and unparallel credibility{" "}
              </p>
              <button className='loginbtn' onClick={() => loginUser()}>
                Login
              </button>
              <p
                className='text'
                style={{ textAlign: "center" }}
              >
                OR
              </p>
              <button className='requestbtn'>Request OTP</button>
              <p
                className='createText'
                onClick={() => toggleSignup()}
              >
                Looking for a Job? Click here
              </p>
            </div>
          ) : (
            <div className='login'>
              <p style={{ marginTop: 10, color: "#979391",fontWeight:'bold' }}>
                {account.subHeading}
              </p>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter email/Mobile number"
                style={{margin:'12px 0px'}}
              />
              {error && (
                <p className='error'>
                  Please enter your student Email ID or Mobile number
                </p>
              )}

              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter password"
              />
              <p className='text'>
                INDOplacements provides a base of 1500+ firms where you can find
                the perfect working experience for you{" "}
              </p>

              <button className='loginbtn' onClick={() => signupUser()}>
                Login
              </button>
              <p
                className='text'
                style={{ textAlign: "center" }}
              >
                OR
              </p>
              <button className='requestbtn'>Request OTP</button>
              <p
                className='createText'
                onClick={() => toggleLogin()}
              >
                Want to hire the perfect candidate for your company? Click here
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
