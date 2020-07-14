import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import tileData from "./tileData.js";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./images/logo.png";
import TripImg from "./images/dome.jpg";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 3 },
  menuButton: { marginRight: theme.spacing(2) },
  tripy: {
    flexGrow: 1,
    color: "#ffab40",
    fontSize: 55,
    fontWeight: 600,
    marginTop: theme.spacing(1.5),
  },
  list: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 200,
    height: 200,
  },
  logo: {
    marginLeft: theme.spacing(-1),
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3),
    height: "70px",
    width: "100px",
    borderRadius: "10%",
  },
  searchDiv: {
    flexGrow: 1,
    height: "300px",
    width: "500px",
    position: "absolute",
    top: "60%",
    left: "35%",
    borderColor: "#0063cc",
    borderRadius: "10%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    border: "1px solid #008B8B",
    borderColor: "#ffab40",
    borderWidth: "5px",
    backgroundColor: "#efefefff",
    "&:hover": {
      backgroundColor: "#efefefff",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  btn: {
    borderColor: "black",
    background: "linear-gradient(45deg, #ffab40 30%, #FF8E53 90%)",
    borderWidth: "50%",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
    color: "white",
    height: 10,
    width: 130,
    padding: "20px",
    marginRight: theme.spacing(2),
  },
  TripImg: {
    height: "65%",
    width: "45%",
    position: "absolute",
    right: "27%",
    top: "25%",
    borderRadius: "10%",
  },
  scrollDiv: {
    backgroundColor: theme.palette.background.paper,
    height: "65%",
    width: "70%",
    position: "absolute",
    right: "13%",
    top: "25%",
    borderRadius: "10%",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    height: "100%",
    width: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  searchIcon: {
    padding: theme.spacing(0, 56),
    height: "100%",
    color: "#0097a7",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    position: "relative",
    border: "1px solid #008B8B",
    borderRadius: "15%",
    borderColor: "#ffab40",
    borderWidth: "1px",
    backgroundColor: "#efefefff",
    "&:hover": {
      backgroundColor: "#efefefff",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchDiv: {
    flexGrow: 1,
    height: "300px",
    width: "500px",
    position: "absolute",
    top: "110%",
    left: "35%",
  },
}));
export default function Trip() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#efefefff", height: 70 }}>
        <Toolbar>
          <img src={logo} alt="" className={classes.logo} />
          <Typography variant="h6" className={classes.tripy}>
            TRIPY
          </Typography>
          <Button className={classes.btn} href="Home">
            Home
          </Button>
          <Button className={classes.btn} href="Start">
            Start
          </Button>
          <Button className={classes.btn} href="Trip">
            Trip
          </Button>
          <Button className={classes.btn} href="SignIn">
            Me
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.scrollDiv}>
        <GridList className={classes.gridList} cols={1} cellHeight={"auto"}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} />
              <GridListTileBar />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div>
        <div className="half-circleL"></div>
        <div className="half-circleR"></div>
      </div>
      <div className={classes.searchDiv}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Date"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "Date" }}
          />
        </div>
      </div>
    </div>
  );
}
