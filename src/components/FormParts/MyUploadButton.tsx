import { Box, Button, FormLabel, Typography } from "@mui/material";

interface MyUploadButtonProps {
  formlabel: string;
  fileName: string | null;
  setFileName: (fileName: string) => void;
}

function MyUploadButton({
  formlabel,
  fileName,
  setFileName,
}: MyUploadButtonProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <Box>
      <FormLabel>{formlabel}</FormLabel>
      <Box sx={{ mt: 1 }}>
        <Button component="label" variant="outlined">
          Browse...
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {fileName && <Typography variant="body2">{fileName}</Typography>}
      </Box>
    </Box>
  );
}

export default MyUploadButton;
