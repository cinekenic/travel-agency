import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import PropTypes from "prop-types";
import styles from "../OrderOption/OrderOption.module.scss";

const OrderOptionNumber = ({ price, currentValue, limits, setOptionValue }) => (
  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    ></input>
    ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  price: PropTypes.string,
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
