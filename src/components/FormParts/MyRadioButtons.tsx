import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface MyRadioButtonProps {
  formLabel: string;
  groupStyle?: "row" | "column";
  required?: boolean;
  values: { label: string; value: string }[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue?: string; // 🔹 Added prop to control selected value
}

function MyRadioButton({
  formLabel,
  groupStyle = "row",
  required = false,
  values,
  onChange,
  selectedValue,
}: MyRadioButtonProps) {
  return (
    <FormControl>
      <FormLabel>{required ? `${formLabel} *` : formLabel}</FormLabel>
      <RadioGroup
        row={groupStyle === "row"}
        value={selectedValue}
        onChange={onChange}
      >
        {values.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default MyRadioButton;
