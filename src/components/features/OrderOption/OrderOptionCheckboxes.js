import React from "react";
import styles from "./OrderOption.module.scss";
import PropTypes from "prop-types";
import { formatPrice } from "../../../utils/formatPrice";

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter((value) => value !== id);
  }
};

const OrderOptionCheckboxes = ({ values, currentValue, setOptionValue }) => (
  <div className={styles.checkboxes}>
    {values.map((value) => (
      <label key={value.id}>
        <input
          type="checkbox"
          className={styles.inputSmall}
          checked={currentValue.includes(value.id) ? true : false}
          value={value.id}
          onChange={(event) =>
            setOptionValue(
              newValueSet(currentValue, value.id, event.currentTarget.checked)
            )
          }
        />
        {value.name}({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
