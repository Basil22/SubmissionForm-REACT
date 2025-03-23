import { Typography } from "@mui/material";

interface MyFormHeadingProps {
  heading: string;
}

function MyFormHeading({ heading }: MyFormHeadingProps) {
  return (
    <Typography
      variant="h5"
      align="center"
      color="#ff1744"
      gutterBottom
      sx={{ textTransform: "uppercase", fontSize: "1.5rem" }}
    >
      <strong>{heading}</strong>
    </Typography>
  );
}

export default MyFormHeading;
