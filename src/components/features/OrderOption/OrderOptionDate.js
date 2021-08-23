import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./OrderOption.module.scss";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const OrderOptionDate = ({ setOptionValue }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.component}>
      <DatePicker
        className={styles.input}
        selected={startDate}
        showTimeSelect
        dateFormat="yyyy/MM/dd"
        placeholderText="Click to select a date"
        onChange={(date) => {
          setStartDate(date);
          setOptionValue(date);
        }}
        isClearable={true}
      />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
