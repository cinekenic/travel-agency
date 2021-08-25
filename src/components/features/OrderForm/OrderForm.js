import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import OrderSummary from "../OrderSummary/OrderSummary";
import pricing from "../../../data/pricing.json";
import OrderOption from "../OrderOption/OrderOption";
import PropTypes from "prop-types";


import Button from "../../common/Button/Button";
import {formatPrice} from "../../../utils/formatPrice";
import {calculateTotal} from "../../../utils/calculateTotal";
import settings from "../../../data/settings";


const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  if(options.name ==='' || options.contact ===''){
    alert('Pleas enter your data');
    return;
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, options, setOrderOption, tripId, tripName, countryCode }) => (
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
    <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};


export default OrderForm;
