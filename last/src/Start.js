import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import logo from "./images/logo.png";
import Mo from "./images/Mo.PNG";

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
    flexGrow: 1,
    position: "absolute",
    top: "5%",
    left: "10%",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(10),
    color: "#008B8B",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 1000,
    fontSize: 70,
  },
  loginButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(110),
    marginTop: theme.spacing(5),
    backgroundColor: "008B8B",
    borderColor: "008B8B",
    fontSize: 16,
    height: "50px",
    width: "150px",
  },
  SignUpButton: {
    // this for sign in and up ... button
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(90),
    marginTop: theme.spacing(5),
    color: "#f3b88d",
    fontSize: 16,
    height: "50px",
    width: "150px",
    position: "absolute",
    right: "10%",
  },
  aboutbutton: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(20),
    marginTop: theme.spacing(7),
    color: "#f3b88d",
    fontSize: 16,
    height: "50px",
    width: "150px",
  },
  aboutbuttonus: {
    marginLeft: theme.spacing(0),
    marginTop: theme.spacing(7),
    color: "#f3b88d",
    fontSize: 16,
    height: "50px",
    width: "150px",
  },
  Maintext: {
    color: "#fffff",
    width: "100%",
    marginLeft: theme.spacing(20),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),

    color: "#008B8B",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 1000,
    fontSize: 50,
  },
  logoImg: {
    height: "50%",
    width: "33%",
    position: "absolute",
    right: "15%",
    top: "30%",
    borderRadius: "10%",
  },
  second: {
    // this for second div ( the div that have 3 div (about Tripy div , how to use Tripy ...))
    height: "600px",
    width: "100%",
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(30),
  },
  third: {
    // this for second div ( the div that have 3 div (about Tripy div , how to use Tripy ...))
    height: "600px",
    width: "100%",
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(30),
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
    color: "#00CED1",
    width: "100%",
    fontSize: "15",
    fontFamily: "",
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
    border: "5px solid #008B8B",
  },
  Rania: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "0%",
    right: "0%",
    border: "5px solid #008B8B",
  },
  Mo: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "280px",
    left: "0%",
    border: "5px solid #008B8B",
  },
  Shadoo: {
    height: "250px",
    width: "250px",
    position: "absolute",
    top: "280px",
    right: "0%",
    border: "5px solid #008B8B",
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
    color: "#ff8c00",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 200,
    fontSize: 25,
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
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 200,
    fontSize: 45,
  },
  lasttext1: {
    position: "absolute",
    top: "45%",
    left: "10%",
    color: "#008B8B",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 200,
    fontSize: 20,
  },
}));

export default function Start() {
  const classes = useStyles();
  return (
    <section>
      <div>
        {/* circle div */}
        <div className="half-circleT"></div>
        <div className="half-circleL"></div>
        <div className="half-circleR"></div>
        <div className="half-circleL4"></div>
        <div className="half-circleR2"></div>
        <div className="half-circleR3"></div>
        <div className="half-circleL3"></div>
        <div className="circle"></div>
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
          href="/SignIn"
        >
          about as
        </Button>
        <Button
          variant="contained"
          color="deepOrange"
          className={classes.aboutbuttonus}
          href="/SignUp"
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
          <Typography variant="h6" className={classes.stiptext}>
            {" "}
            About Tripy <br />
            Application to display tourist trips to the occupied interior or
            inside the west bank and to organize the relationship between the
            tour coordinator and tourists{" "}
          </Typography>
        </div>
        <div className={classes.stip2}>
          <img src={Stip2} className={classes.StipImg} />
          <Typography variant="h6" className={classes.stiptext}>
            TRIPY Features <br /> • Free <br /> • Credibility <br /> • Easy to
            Use <br /> • We are the only ones <br /> • We have an unlimited
            number of trips
          </Typography>
        </div>
        <div className={classes.stip3}>
          <img src={stip3} className={classes.StipImg} />
          <Typography variant="h6" className={classes.stiptext}>
            {" "}
            How to use
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
            <img src={Mo} className={classes.ourimg} />
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
              Our service would <br />
              be your best fit
            </Typography>
            <Typography variant="h6" className={classes.lasttext1}>
              We are MORSH team , we are <br />
              studing computer science and <br />
              Design thinking at Code For Palestine , and this is our <br />
              Web-App Called Tripy
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
