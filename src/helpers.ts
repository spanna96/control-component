export const getTotalSumms = (value: number, noNdfl: boolean) => {
  const round = (val: number) => Math.round(val);

  const tax = 0.13;
  let taxSum = 0;
  let total = 0;
  let salary = 0;

  if (noNdfl) {
    salary = value;
    total = value / (1 - tax);
    taxSum = total - salary;
  } else {
    total = value;
    taxSum = value * tax;
    salary = total - taxSum;
  }
  return {
    taxSum: round(taxSum),
    total: round(total),
    salary: round(salary),
  };
};

export const formatInput = (value: string) => {
  return Number(value.replace(/[^0-9]/g, ""));
};

export const formatCurency = (value: string | number) => {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
