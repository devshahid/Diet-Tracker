import ContentScreen from "./ContentScreen";

import "../css/card.css";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CardBody = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="card">
        <div className="container" onClick={handleClickOpen}>
          <h4>{props.title}</h4>
          <h4>{props.time}</h4>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }}>{props.title}</Typography>
          </Toolbar>
        </AppBar>
        <ContentScreen title={props.title} />
      </Dialog>
    </>
  );
};
const DietScreen = () => {
  return (
    <>
      <div className="card_container">
        {<CardBody title="BREAKFAST" time="10:00 AM" />}
        {<CardBody title="LUNCH" time="02:00 PM" />}
        {<CardBody title="SNACKS" time="06:00 PM" />}
        {<CardBody title="DINNER" time="10:00 PM" />}
      </div>
    </>
  );
};

export default DietScreen;
export { CardBody };
