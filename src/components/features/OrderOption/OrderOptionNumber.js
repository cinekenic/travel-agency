import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
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

export default OrderOptionNumber;
