import { CheckBox } from "components";
export default {
  title: "e_comm/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder6",
  variant: "FillLightgreen800",
  size: "sm",
  inputClassName: "mr-1",
};
