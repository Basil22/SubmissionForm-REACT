import { Box, Button } from "@mui/material";

interface MyButtonProps {
  buttonValues: {
    label: string;
    variant: string;
    color: string;
    onClick?: () => void;
  }[];
}

function MyFooterButtons({ buttonValues }: MyButtonProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
      {buttonValues.map((button) => (
        <Button
          key={button.label}
          variant={button.variant as "text" | "outlined" | "contained"}
          color={
            button.color as
              | "inherit"
              | "primary"
              | "secondary"
              | "success"
              | "error"
              | "info"
              | "warning"
          }
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );
}

export default MyFooterButtons;
