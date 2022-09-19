import { ReactNode } from "react";

import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

interface IRadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export function RadioButton({ children, ...props }: IRadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        textTransform="capitalize"
        cursor="pointer"
        color="black.700"
        fontSize="18px"
        _checked={{
          color: "purple.primary",
        }}
        px={5}
      >
        {children}
      </Box>
    </Box>
  );
}
