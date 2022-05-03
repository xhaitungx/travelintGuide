import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import "./login.scss";
const Login = () => {
  const createLoginRequest = (values) => {
    const getGuiderID = (accountID) => {
      axios
        .get("https://tour-api-dev.herokuapp.com/huongdanvien")
        .then(({ data }) => {
          const Data = data.find(
            (guider) => guider.id_tai_khoan?.["_id"] === accountID
          );
          window.sessionStorage.setItem("guiderID", Data["_id"]);
          window.sessionStorage.setItem("guiderName", Data.ho_ten);

          window.location.href = "http://localhost:3000";
        });
    };

    axios(`https://tour-api-dev.herokuapp.com/taikhoan/${values.username}`)
      .then(({ data }) => {
        console.log(data);
        if (data == null) alert("Tài khoản hoặc mật khẩu không đúng");
        else {
          if (data.password === values.password) {
            getGuiderID(data["_id"]);
          } else alert("Mật khẩu không đúng");
        }
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      createLoginRequest(values);
    },
  });
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <h1> Hướng dẫn viên du lịch</h1>
        <TextField
          id="username"
          name="username"
          label="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <TextField
          id="password"
          name="password"
          label="Mật khẩu"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button type="submit">Đăng nhập</Button>
      </form>
    </div>
  );
};

export default Login;
//
