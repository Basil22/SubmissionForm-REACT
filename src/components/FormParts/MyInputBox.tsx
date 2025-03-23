import { Box, FormLabel, TextField } from "@mui/material";

interface MyInputBoxProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function MyInputBox({
  label,
  id,
  name,
  placeholder,
  multiline = false,
  rows,
  required = false,
  value,
  onChange,
}: MyInputBoxProps) {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <TextField
        fullWidth
        id={id}
        name={name}
        variant="outlined"
        placeholder={placeholder}
        size="small"
        sx={{ mt: 1 }}
        multiline={multiline}
        rows={rows}
        required={required}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default MyInputBox;
