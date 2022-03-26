import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import "./place.scss";
const Place = () => {
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
          scroll="paper"
          fullWidth="100%"
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Địa điểm: Osaka"}</DialogTitle>
          <DialogContent dividers={true}>
            <div className="overFlow">
              <h1>Cập nhật trạng thái tiến trình</h1>
              <h1>Gợi ý tham quan</h1>
            </div>
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
