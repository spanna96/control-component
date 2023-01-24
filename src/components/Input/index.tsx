import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { WrappedFieldProps } from "redux-form";

import { formatInput, formatCurency } from "../../helpers";
import { formDataSelector } from "../../redux/selectors";
import { RoubleSign, AnimatedComponent } from "../index";

import "./_Input.sass";

const Input = (props: WrappedFieldProps) => {
  const { summ, payment_type } = useSelector(formDataSelector);

  const getInputLabel = () => {
    switch (payment_type) {
      case "day":
        return "в день";
      case "hour":
        return "в час";
    }
  };

  return (
    <Form.Group
      as={Row}
      className="Input"
      onChange={(e) =>
        props.input.onChange(
          formatInput((e.target as HTMLInputElement).value)
        )
      }
    >
      <Col>
        <Form.Control placeholder="0" value={formatCurency(summ)} />
      </Col>

      <Form.Label column>
        <RoubleSign />

        <AnimatedComponent condition={!!getInputLabel()}>
          <div>{getInputLabel()}</div>
        </AnimatedComponent>
      </Form.Label>
    </Form.Group>
  );
};

export default Input;
