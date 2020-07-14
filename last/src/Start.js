import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import logo from "./images/logo.png";
import Mousa from "./images/Mousa.jpg";
import Rania from "./images/Rania.jpg";
import stip1 from "./images/Stip1.jpg";
import Stip2 from "./images/Stip2.jpg";
import stip3 from "./images/Stip3.jpg";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    // we use this to all title in the app like TRIPY
    position: "absolute",
    top: "5%",
    left: "10%",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(10),
    fontDisplay: "swap",
    flexGrow: 1,
    color: "#ffab40",
    fontSize: 85,
    fontWeight: 600,
    marginTop: theme.spacing(1.5),
  },
  loginButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(110),
    marginTop: theme.spacing(5),
    fontSize: 16,
    height: "50px",
    width: "150px",
    background: "linear-gradient(45deg, #0097a7  30%, #2abccb 90%)",
    borderColor: "#0063cc",
    boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
    color: "white",
  },
  SignUpButton: {
    // this for sign in and up ... button
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(90),
    marginTop: theme.spacing(5),
    fontSize: 16,
    height: "50px",
    width: "150px",
    position: "absolute",
    right: "10%",
    background: "linear-gradient(45deg, #0097a7  30%, #2abccb 90%)",
    borderColor: "#0063cc",
    boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
    color: "white",
  },
  aboutbutton: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(20),
    marginTop: theme.spacing(7),
    fontSize: 16,
    height: "50px",
    width: "150px",
    background: "linear-gradient(45deg, #ffab40 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
    color: "white",
  },
  aboutbuttonus: {
    marginLeft: theme.spacing(0),
    marginTop: theme.spacing(7),
    fontSize: 16,
    height: "50px",
    width: "150px",
    color: "white",
    background: "linear-gradient(45deg, #ffab40 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
  },
  Maintext: {
    color: "#0097a7 ",
    width: "100%",
    marginLeft: theme.spacing(20),
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(1),
    color: "#008B8B",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 1000,
    fontSize: 45,
  },
  logoImg: {
    height: "45%",
    width: "30%",
    position: "absolute",
    right: "20%",
    top: "30%",
    borderRadius: "10%",
  },
  second: {
    // this for second div ( the div that have 3 div (about Tripy div , how to use Tripy ...))
    height: "600px",
    width: "100%",
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(50),
  },
  third: {
    // this for second div ( the div that have 3 div (about Tripy div , how to use Tripy ...))
    height: "260px",
    width: "100%",
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(5),
  },
  StipImg: {
    // this for the img for about Tripy div , how to use Tripy div  and TRIPY Features div
    height: "280px",
    width: "100%",
    backgroundColor: "#21C4D3",
    borderRadius: "10%",
  },
  stiptext: {
    // this for the Text for about Tripy div , how to use Tripy div  and TRIPY Features div
    color: "#0097a7 ",
    width: "100%",
    fontSize: "15",
    textAlign: "center",
  },
  stip1: {
    // this about TRIPY div
    height: "450px",
    width: "20%",
    marginRight: theme.spacing(5),
    position: "absolute",
    top: "93%",
    left: "10%",
  },
  stip2: {
    //   this Tripy Features div
    height: "450px",
    width: "20%",
    marginRight: theme.spacing(5),
    position: "absolute",
    top: "93%",
    left: "40%",
  },
  stip3: {
    // this how to use Tripy div
    height: "450px",
    width: "20%",
    marginRight: theme.spacing(2),
    position: "absolute",
    top: "93%",
    right: "10%",
  },
  aboutusdiv: {
    height: "530px",
    width: "530px",
    position: "absolute",
    top: "200%",
    left: "8%",
  },
  Mousa: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "0%",
    left: "0%",
    border: "5px solid #0097a7 ",
  },
  Rania: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "0%",
    right: "0%",
    border: "5px solid #0097a7 ",
  },
  Mo: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "280px",
    left: "0%",
    border: "5px solid #0097a7 ",
  },
  Shadoo: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "280px",
    right: "0%",
    border: "5px solid #0097a7 ",
  },
  ourimg: {
    height: "100px",
    width: "100px",
    position: "absolute",
    top: "10px",
    left: "10%",
    borderRadius: "50%",
  },
  ourtext: {
    position: "absolute",
    top: "45%",
    left: "10%",
    color: "#ffab40ff ",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 200,
    fontSize: 20,
  },
  lastdiv: {
    height: "530px",
    width: "530px",
    position: "absolute",
    top: "0%",
    left: "100%",
  },
  lasttext: {
    position: "absolute",
    top: "20%",
    left: "10%",
    color: "#008B8B",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    fontSize: 45,
  },
  lasttext1: {
    position: "absolute",
    top: "45%",
    left: "10%",
    color: "#008B8B",
    fontFamily: "oswald",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 200,
    fontSize: 20,
  },
  title1: {
    // we use this to all title in the app like TRIPY
    flexGrow: 1,
    position: "absolute",
    top: "63%",
    left: "20%",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(10),
    color: "#ffab40d6",
    fontFamily: "oswald",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 1000,
    fontSize: 25,
    textAlign: "center",
  },
}));
function Start() {
  const classes = useStyles();
  return (
    <section>
      <div>
        <div className="half-circleT"></div>
        <div className="half-circleL"></div>
        <div className="half-circleR"></div>
        <div className="half-circleL4"></div>
        <div className="half-circleR2"></div>
        <div className="half-circleR3"></div>
        <div className="half-circleL3"></div>
        <div className="half-circleB"></div>
      </div>
      <div>
        <Typography variant="h3" className={classes.title}>
          TRIPY
        </Typography>
        <Button
          variant="contained"
          className={classes.loginButton}
          href="/SignIn"
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="DarkCyan"
          className={classes.SignUpButton}
          href="/SignUp"
        >
          Sign Up
        </Button>
        <Typography variant="h4" className={classes.Maintext}>
          Trips come <br />
          together in <br />
          TRIPY
        </Typography>
        <Button
          variant="contained"
          className={classes.aboutbutton}
          href="/Home"
        >
          about us
        </Button>
        <Button
          variant="contained"
          color="deepOrange"
          className={classes.aboutbuttonus}
        >
          about Tripy
        </Button>
      </div>
      <div>
        <img src={logo} className={classes.logoImg} />
      </div>
      <div className={classes.second}>
        <div className={classes.stip1}>
          <img src={stip1} className={classes.StipImg} />
          <Typography variant="h4" className={classes.title1}>
            About Tripy{" "}
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h6" className={classes.stiptext}>
            Application to display tourist trips to the occupied interior or
            inside the west bank and to organize the relationship between the
            tour coordinator and tourists{" "}
          </Typography>
        </div>
        <div className={classes.stip2}>
          <img src={Stip2} className={classes.StipImg} />
          <Typography variant="h4" className={classes.title1}>
            TRIPY Features
          </Typography>
          <Typography variant="h6" className={classes.stiptext}>
            <br /> • Free <br /> • Credibility <br /> • Easy to Use <br /> • We
            are the only ones <br /> • We have an unlimited number of trips
          </Typography>
        </div>
        <div className={classes.stip3}>
          <img src={stip3} className={classes.StipImg} />
          <Typography variant="h4" className={classes.title1}>
            How to use
          </Typography>
          <Typography variant="h6" className={classes.stiptext}>
            <br />
            Create an account and then choose the appropriate trip from among
            the listed trips and join the trip, or you can create your own trip
            to show it to others{" "}
          </Typography>
        </div>
      </div>
      <div className={classes.third}>
        <div className={classes.aboutusdiv}>
          <div className={classes.Mousa}>
            <img src={Mousa} className={classes.ourimg} />
            <Typography variant="h6" className={classes.ourtext}>
              Mousa Bsharat <br />
              front-end Deverloper <br />
              Nablus
            </Typography>
          </div>
          <div className={classes.Rania}>
            <img src={Rania} className={classes.ourimg} />
            <Typography variant="h6" className={classes.ourtext}>
              Rania Khaled <br />
              front-end Deverloper <br />
              Bethlehem
            </Typography>
          </div>
          <div className={classes.Mo}>
            <Typography variant="h6" className={classes.ourtext}>
              Mo Salamin <br />
              Back-end Deverloper <br />
              Hebron
            </Typography>
          </div>
          <div className={classes.Shadoo}>
            <img src={logo} className={classes.ourimg} />
            <Typography variant="h6" className={classes.ourtext}>
              Shadyah Amjad
              <br />
              Back-end Deverloper <br />
              Nablus
            </Typography>
          </div>
          <div className={classes.lastdiv}>
            <Typography variant="h4" className={classes.lasttext}>
              Our service would be <br />
              your best fit
            </Typography>
            <Typography variant="h6" className={classes.lasttext1}>
              We are a team of programming students in Code for Palestine. The
              educational program that aims to teach students the basics of
              programming and solving the problems they face in a logica ,I way
              based on the steps
              <br /> of thinking design .
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Start;
