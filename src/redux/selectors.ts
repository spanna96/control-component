import { RootState } from "./store";

export const formDataSelector = (state: RootState) =>
  state?.form?.salary?.values || {};
