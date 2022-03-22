import React from "react";
import { Table } from "../../components";
import "./file.scss";
const File = () => {
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

  return (
    <div className="file">
      <Table
        tableLabel="Nhân viên"
        customer=""
        tableHeading={staffHeading}
        tableData={staffData}
      />
      <Table
        tableLabel="Khách hàng"
        customer="customer--table"
        tableHeading={customerHeading}
        tableData={customerData}
      />
    </div>
  );
};

export default File;
