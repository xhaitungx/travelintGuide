import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { TourDataContext } from "../../pages/home/TourDataContext";
import { Table } from "../../components";
import "./file.scss";
const File = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { khach_hang } = useContext(TourDataContext);

  const staffHeading = ["Vai trò", "Họ Tên", "SĐT"];
  const customerHeading = ["STT", "Họ Tên", "SĐT"];
  const staffData = [
    { role: "Tài xế", ho_ten: "Long", sdt: "04444442" },
    { role: "HDV", ho_ten: "Tùng", sdt: "013242" },
  ];
  const customerData = [
    { id: 1, ho_ten: "Tùng", sdt: "013242" },
    { id: 2, ho_ten: "Long", sdt: "04444442" },
    { id: 4, ho_ten: "Nhân", sdt: "01222222242" },
  ];

  const customerSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const searchedData = customerData.filter((customer) =>
    customer.ho_ten.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <div classho_ten="file">
      <Table
        tableLabel="Nhân viên"
        customer=""
        tableHeading={staffHeading}
        tableData={staffData}
      />
      <TextField
        type="text"
        onChange={customerSearch}
        placeholder="Nhập tên khách hàng (có dấu)"
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
          tableData={khach_hang}
        />
      )}
    </div>
  );
};

export default File;
// 