import { Typography } from "@mui/material";

interface MyFormHeadingProps {
  heading: string;
}

function MyFormHeading({ heading }: MyFormHeadingProps) {
  return (
    <Typography variant="h5" align="center" gutterBottom>
      <strong>{heading}</strong>
    </Typography>
  );
}

export default MyFormHeading;
