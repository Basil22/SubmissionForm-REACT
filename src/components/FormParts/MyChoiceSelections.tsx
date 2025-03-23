import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";

interface MyChoiceSelectionsProps {
  formlabel: string;
  required?: boolean;
  values: { value: string }[];
  selectedAnswer: string;
  setSelectedAnswer: (answer: string) => void;
}

function MyChoiceSelections({
  formlabel,
  required = false,
  values,
  selectedAnswer,
  setSelectedAnswer,
}: MyChoiceSelectionsProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{required ? `${formlabel} *` : `${formlabel}`}</FormLabel>
      <Select
        value={selectedAnswer}
        onChange={(event) => setSelectedAnswer(event.target.value)}
        displayEmpty
        renderValue={(selected) =>
          selected ? selected : <em>Select Your Answer</em>
        }
        sx={{ mt: 1 }}
      >
        {values.map((each) => (
          <MenuItem key={each.value} value={each.value}>
            {each.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MyChoiceSelections;
