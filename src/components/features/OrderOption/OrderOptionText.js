import React from "react";
import PropTypes from "prop-types";
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

OrderOptionText.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
