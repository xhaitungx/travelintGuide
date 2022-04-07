import React from "react";

import { Face, SupportAgent } from "@mui/icons-material";
import "./table.scss";
const Table = ({ tableLabel, customer, tableHeading, tableData }) => {
  const handleTrClick = (e) => {
    const target = e.target;
    var parent = target.parentElement;
    console.log(parent.id);
    console.log(parent.dataset.id);
    parent.className ? (parent.className = "") : (parent.className = "checked");
  };
  return (
    <div className="table--container">
      <div className="table--label">
        {customer ? <Face /> : <SupportAgent />}
        <h2>{tableLabel}</h2>
      </div>

      <table style={{ width: "100%" }} className={customer}>
        <colgroup>
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "45%" }} />
          <col span="1" style={{ width: "50%" }} />
        </colgroup>
        <thead>
          <tr>
            {tableHeading.map((heading) => (
              <th>
                <h3>{heading}</h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customer
            ? tableData.map((data, index) => (
                <tr onClick={handleTrClick} id={data.id} data-id={data.id}>
                  <td>
                    <p>{index}</p>
                  </td>
                  <td>
                    <p>{data.name}</p>
                  </td>
                  <td>
                    <p>{data.phone}</p>
                  </td>
                </tr>
              ))
            : tableData.map((data) => (
                <tr>
                  <td>
                    <p>{data.role}</p>
                  </td>
                  <td>
                    <p>{data.name}</p>
                  </td>
                  <td>
                    <p>{data.phone}</p>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
