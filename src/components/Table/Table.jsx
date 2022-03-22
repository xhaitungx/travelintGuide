import React from "react";
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
      <h3>{tableLabel}</h3>
      <table style={{ width: "100%" }} className={customer}>
        <colgroup>
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "45%" }} />
          <col span="1" style={{ width: "50%" }} />
        </colgroup>
        <thead>
          <tr>
            {tableHeading.map((heading) => (
              <th>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customer
            ? tableData.map((data, index) => (
                <tr onClick={handleTrClick} id={data.id} data-id={data.id}>
                  <td>{index}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                </tr>
              ))
            : tableData.map((data) => (
                <tr>
                  <td>{data.role}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
