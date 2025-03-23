import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

interface MyCheckBoxProps {
  formlabel: string;
  groupStyle?: "row" | "column";
  required?: boolean;
  label: {
    labels: string;
  }[];
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function MyCheckBox({
  formlabel,
  groupStyle = "row",
  required = false,
  label,
  value,
  onChange,
}: MyCheckBoxProps) {
  return (
    <FormControl>
      <FormLabel>{required ? `${formlabel} *` : `${formlabel}`}</FormLabel>
      <FormGroup row={groupStyle === "row"}>
        {label.map((item) => (
          <FormControlLabel
            key={item.labels}
            control={
              <Checkbox
                checked={value.includes(item.labels)}
                onChange={onChange}
                value={item.labels}
              />
            }
            label={item.labels}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default MyCheckBox;
