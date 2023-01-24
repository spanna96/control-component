import React from "react";
import { useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Form as BSForm } from "react-bootstrap";

import {
  Input,
  TotalSummsPerMonth,
  Switch,
  Radios,
  AnimatedComponent,
} from "../index";
import { formDataSelector } from "../../redux/selectors";

import "./_Form.sass";

const Form = () => {
  const { payment_type, summ } = useSelector(formDataSelector);

  const isMonthSelected = payment_type === "month";
  const isMinSelected = payment_type === "min";

  return (
    <div className="Form">
      <BSForm className="Form-inputs">
        <BSForm.Label className="Form-label">Сумма</BSForm.Label>

        <Field name="payment_type" component={Radios} />

        <AnimatedComponent condition={!isMinSelected}>
          <>
            <Field name="no_ndfl" component={Switch} />
            <Field name="summ" component={Input} />
          </>
        </AnimatedComponent>
      </BSForm>

      <AnimatedComponent condition={isMonthSelected && !!summ}>
        <TotalSummsPerMonth />
      </AnimatedComponent>
    </div>
  );
};

const ControlReduxForm = reduxForm({
  form: "salary",
  initialValues: {
    payment_type: "month",
    no_ndfl: true,
  },
})(Form);

export default ControlReduxForm;
