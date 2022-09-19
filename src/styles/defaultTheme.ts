import { extendTheme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    textTransform: "uppercase",
    borderRadius: "10px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "800",
  },
  defaultProps: {
    colorScheme: "purple.primary",
    variant: "solid",
    size: "lg",
  },
  variants: {
    outline: {
      fontFamily: "Poppins",
      lineHeight: "23px",
      color: "purple.dark",
      border: "2px solid",
      borderColor: "purple.primary",
    },
    gradient: {
      color: "white",
      lineHeight: "24px",
      background:
        "linear-gradient(90deg, rgba(13,0,68,0.9), rgba(107,0,165,0.9) 70%)",
      _hover: {
        opacity: "0.9",
      },
      _active: {
        transform: "scale(0.9)",
      },
    },
  },
};

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        overflowX: "hidden",
      },
      body: {
        background: "bgColor",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
        overflowX: "hidden",
      },
    },
  },
  components: {
    Button,
    Text,
  },
  colors: {
    bgColor: "#FFFFFF",
    bgColorSecondary: "#F6F6FF",
    white: "#FFFFFF",
    blue: {
      500: "#545AE8",
    },
    purple: {
      primary: "#8F14D2",
      dark: " #290052;",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
    button: "'Poppins', sans-serif",
  },
});
