import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import { getTotalSumms, formatCurency } from "../../helpers";
import { formDataSelector } from "../../redux/selectors";
import { RoubleSign } from "../index";

import "./_TotalSummsPerMonth.sass";

const TotalSummsPerMonth = () => {
  const { payment_type, no_ndfl, summ } = useSelector(formDataSelector);

  const getSumms = useCallback(
    () => getTotalSumms(Number(summ) || 0, no_ndfl),
    [payment_type, no_ndfl, summ]
  );

  const { taxSum, total, salary } = getSumms();
  return (
    <div className="TotalSummsPerMonth">
      <div>
        <b>
          {formatCurency(salary)}
          <RoubleSign />
        </b>
        сотрудник будет получать на руки
      </div>
      <div>
        <b>
          {formatCurency(taxSum)}
          <RoubleSign />
        </b>
        НДФЛ, 13% от оклада
      </div>
      <div>
        <b>
          {formatCurency(total)}
          <RoubleSign />
        </b>
        за сотрудника в месяц
      </div>
    </div>
  );
};

export default TotalSummsPerMonth;
