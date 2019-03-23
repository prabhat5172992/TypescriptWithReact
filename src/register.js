import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Login = (props) => {
  const style = { textStyle: { width: "300px" } }
  return (
    <div style={{ textAlign: "center", width: "100%", marginTop: '30px' }}>
      <div style={{ display: "inline-block", boxSizing: "border-box", border: "2px solid #C8CACA", padding: "10px", height: '380px' }}>
        <div style={{ textAlign: "center", fontSize: "1.2rem", backgroundColor: "#12C4F3", color: "#FBFCFC", padding: "10px" }}>LOGIN</div>
        <MuiThemeProvider>
          <div style={{ marginTop: "10px" }}>
            <TextField
              floatingLabelFixed
              floatingLabelText="Emp ID"
              style={style.textStyle}
            />
            <br />
            <TextField
              floatingLabelFixed
              floatingLabelText="Email"
              style={style.textStyle}
            />
            <br />
            <TextField
              floatingLabelFixed
              type="password"
              floatingLabelText="Password"
              style={style.textStyle}
            />
            <br />
            <RaisedButton label="Submit" style={{ marginTop: '30px' }} primary={true} />
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    </div>
  );
};

export default Login;
