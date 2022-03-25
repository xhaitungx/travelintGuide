import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import "./place.scss";
const Place = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  return (
    <>
      <div className="place--container" onClick={handleClickOpen}>
        <div className="place--img">
          <img src={require("./sth.png")} />
          <small className="status going">Đang đến</small>
        </div>
        <div className="place--information">
          <h3>Tên địa điểm: Heaven</h3>
          <p>Vị trí: Cloud street</p>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {id}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Place;
