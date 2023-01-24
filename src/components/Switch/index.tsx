import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { WrappedFieldProps } from "redux-form";
import { useSelector } from "react-redux";

import { formDataSelector } from "../../redux/selectors";

import "./_Switch.sass";

const Switch = (props: WrappedFieldProps) => {
  const { no_ndfl } = useSelector(formDataSelector);

  return (
    <Form.Group as={Row} className="Switch" {...props.input}>
      <Form.Label column className={`Switch-label ${!no_ndfl && "active"}`}>
        Указать с НДФЛ
      </Form.Label>
      <Col className="Switch-checkbox">
        <Form.Switch className="" type="checkbox" defaultChecked />
      </Col>

      <Form.Label column className={`Switch-label ${no_ndfl && "active"}`}>
        Без НДФЛ
      </Form.Label>
    </Form.Group>
  );
};

export default Switch;
