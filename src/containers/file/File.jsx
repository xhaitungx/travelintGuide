import React, { useState } from "react";
import { TextField } from "@mui/material";

import { Table } from "../../components";
import "./file.scss";
const File = () => {
  const [inputSearch, setInputSearch] = useState("");
  const staffHeading = ["Vai trò", "Họ Tên", "SĐT"];
  const customerHeading = ["STT", "Họ Tên", "SĐT"];
  const staffData = [
    { role: "Tài xế", name: "Long", phone: "04444442" },
    { role: "HDV", name: "Tùng", phone: "013242" },
  ];
  const customerData = [
    { id: 1, name: "Tùng", phone: "013242" },
    { id: 2, name: "Long", phone: "04444442" },
    { id: 4, name: "Nhân", phone: "01222222242" },
  ];

  const customerSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const searchedData = customerData.filter((customer) =>
    customer.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  console.log(searchedData);

  return (
    <div className="file">
      <Table
        tableLabel="Nhân viên"
        customer=""
        tableHeading={staffHeading}
        tableData={staffData}
      />
      <TextField
        type="text"
        onChange={customerSearch}
        sx={{ width: "100%", margin: "2rem 0 1rem 0" }}
      />
      {inputSearch ? (
        <Table
          tableLabel="Khách hàng"
          customer="customer--table"
          tableHeading={customerHeading}
          tableData={searchedData}
        />
      ) : (
        <Table
          tableLabel="Khách hàng"
          customer="customer--table"
          tableHeading={customerHeading}
          tableData={customerData}
        />
      )}
    </div>
  );
};

export default File;
