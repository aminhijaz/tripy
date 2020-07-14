import React, { Component } from "react";
import "./App.css";
import Background2 from "./images/SignInImg.PNG";
import logo from "./images/logo.png";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { withTheme } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";


import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(20),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    marginLeft: theme.spacing(17),
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(17),
    color: "#e68e4a",
  },
})

 class SignIn extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <section className="section">
        <div className=" SignUpimg">
          <div className="SignInDiv"></div>
          <div className="Circle"></div>
          <div className="Circle1"></div>
  
          <div className="SignInBox">
            <div className="SignIn">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <img src={logo} className={classes.logo} />
                  <Typography variant="h4" className={classes.title}>
                    Sign In
                  </Typography>
                  <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="SignUp" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Container>
            </div>
          </div>
          <img src={Background2} className="SignInimg" />
        </div>
      </section>
    );

  }

}
export default withStyles(styles, { withTheme: true })(SignIn);

