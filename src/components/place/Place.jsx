import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import "./place.scss";
const Place = ({ data }) => {
  console.log("🚀 ~ file: Place.jsx ~ line 12 ~ Place ~ data", data);

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
          <img src={`https://tour-api-dev.herokuapp.com${data.hinh}`} />
          <small className={`status`}>{data.trang_thai}</small>
        </div>
        <div className="place--information">
          <h1>{data.ten}</h1>
          <p>{data.tinh_thanh}</p>
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
              <h1>Thông tin địa điểm</h1>
              <p>{data.mo_ta}</p>
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
