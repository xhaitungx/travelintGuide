import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import "./login.scss";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      sdt: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <h1> Hướng dẫn viên du lịch</h1>
        <TextField
          id="text"
          name="sdt"
          label="Số điện thoại"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <TextField
          id="password"
          name="password"
          label="Mật khẩu"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <Button type="submit">Đăng nhập</Button>
      </form>
    </div>
  );
};

export default Login;
