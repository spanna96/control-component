import React from "react";
import Form from "react-bootstrap/Form";
import { WrappedFieldProps } from "redux-form";

import { InfoIcon } from "../index";

import "./_Radios.sass";

const Radios = (props: WrappedFieldProps) => {
  return (
    <Form.Group
      className="Radios"
      onChange={(e) => props.input.onChange((e.target as HTMLInputElement).value)}
    >
      <Form.Check
        name="Radios-item"
        type="radio"
        label="Оклад за месяц"
        value="month"
        defaultChecked
      />

      <Form.Check name="Radios-item" type="radio">
        <Form.Check.Input type="radio" name="Radios-item" value="min" />
        <Form.Check.Label className="Radios-item">
          МРОТ <InfoIcon />
        </Form.Check.Label>
      </Form.Check>

      <Form.Check
        name="Radios-item"
        type="radio"
        label="Оплата за день"
        value="day"
      />

      <Form.Check
        name="Radios-item"
        type="radio"
        label="Оплата за час"
        value="hour"
      />
    </Form.Group>
  );
};

export default Radios;
