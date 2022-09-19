import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="100px"
      align="center"
      justify="center"
      bgImg="linear-gradient(90deg, rgba(13,0,68,0.9), rgba(107,0,165,0.9) 70%)"
    >
      <Box color="white" textAlign="center" fontWeight="500">
        © 2022 PLATHANUS TECH.
      </Box>
    </Flex>
  );
};

export default Footer;
