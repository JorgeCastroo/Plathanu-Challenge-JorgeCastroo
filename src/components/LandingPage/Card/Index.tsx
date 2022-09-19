import { Box, Button, Image, Stack } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  company: string;
  image: string;
  click?: () => void;
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <Stack
      w="350px"
      border="1px solid purple"
      borderRadius="15px"
      align="center"
      justify="space=between"
      padding="20px"
      boxShadow="10px 10px 100px rgba(84, 90, 232, 0.11);"
      bgColor="bgColorSecondary"
    >
      <Stack alignItems="center" w="100%" h="100%">
        <Box color="purple.dark" fontSize="25px">
          {props.title}
        </Box>
        <Box color="purple.primary" fontSize="20px">
          {props.company}
        </Box>
      </Stack>
      <Image
        src={props.image}
        w="250px"
        h="170px"
        borderRadius="20px"
        boxShadow="10px 10px 148px rgba(84, 90, 232, 0.11)"
        referrerPolicy="no-referrer"
      />
      <Box pt="20px">
        <Button variant="gradient" h="50px" onClick={props.click}>
          Conheça mais
        </Button>
      </Box>
    </Stack>
  );
};

export default Card;
