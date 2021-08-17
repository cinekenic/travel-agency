import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import Icon from "../../common/Icon/Icon";
import styles from "./OrderOption.module.scss";

const OrderOptionIcons = ({
  values,
  required,
  currentValue,
  setOptionValue,
}) => (
  <div className={styles.component}>
    {required ? (
      false
    ) : (
      <div className={styles.icon} value="" onClick={() => setOptionValue("")}>
        <Icon name={"times-circle"} />
        none
      </div>
    )}
    {values.map((value) => (
      <div
        className={currentValue === value.id ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;
