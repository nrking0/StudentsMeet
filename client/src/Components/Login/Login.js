import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import './Login.css';
import Dashboard from '../Dashboard/Dashboard'
import { Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const useStyles = makeStyles({
  loginButton: {
    backgroundColor: 'orange',
    color: 'black',
    width: '80%',
    marginLeft: '10%',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#e69500'
    }
  },
  infoText: {
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'light'
  }
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (props) => {
  const classes = useStyles();

  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("Inputed Username: " + username);
    console.log("Inputted password: " + password);

    console.log("true: " + (username === "test"));
    console.log("true: " + (password === "123"));

    if (username === "test" && password === "123") {
      console.log("here")
      setLogin(true)
    } else {
      setError(true);
    }
  }


  return (
    <>
      <Snackbar open={error} autoHideDuration={3000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          Login Failed. Invalid Credentials
        </Alert>
      </Snackbar>
      {
        !login ? (
          <div className="hello">
            <div className="loginbox">
              <h1>Login</h1>
              <form>
                <p>Username</p>
                <input type="text" id="username" placeholder="Enter Username" name="uname"></input>
                <p>Password</p>
                <input type="password" id="password" placeholder="Enter Password" name="pname"></input>
                <Button className={classes.loginButton} onClick={handleSubmit}><b>Login</b></Button><br />
                <Link style={{ marginRight: '10%', position: 'relative', float: 'right' }} to="/">Go back home</Link>
              </form> <br /><br /><br /><br /><br />
              <div className={classes.infoText}>
                <p>*For purposes of this Hack, the login does not lead anywhere, there is a temp account with</p>
                <p>Username: test and Password: 123</p>
                <p>This takes the user to a Dashboard blank page that will allow them to edit their mentor information, potentially read messages and manage basic tools*</p>
              </div>
            </div>
          </div>
        ) : (
            <Dashboard />
          )
      }
    </>
  );
}

export default Login;
