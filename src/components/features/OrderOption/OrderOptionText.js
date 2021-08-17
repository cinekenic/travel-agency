import React from "react";
import styles from "./OrderOption.module.scss";

const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <div className={styles.component}>
    <input
      type="text"
      className={styles.input}
      value={currentValue}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
      placeholder={"Name"}
    />
  </div>
);

export default OrderOptionText;
