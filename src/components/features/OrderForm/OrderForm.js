import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import OrderSummary from "../OrderSummary/OrderSummary";
import pricing from "../../../data/pricing.json";
import OrderOption from "../OrderOption/OrderOption";

import PropTypes from "prop-types";

const OrderForm = ({ tripCost, options, setOrderOption }) => (
  <Grid>
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption
            key={option.name}
            {...option}
            currentValue={options[option.id]}
            setOrderOption={setOrderOption}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
