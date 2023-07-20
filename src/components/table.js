import React from "react";
import RenderYear from "./renderYear";
import styles from './table.module.css'
const Table = (props) => {
  let component = (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <RenderYear yearlyData={props.yearlyData} />
      </tbody>
    </table>
  );

  if (props.yearlyData.length === 0) {
    component = <table className={styles.result}>No Calculatation</table>;
  }

  return <div>{component}</div>;
};

export default Table;
