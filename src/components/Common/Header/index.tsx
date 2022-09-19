import React from "react";
import {
  Box,
  Flex,
  Image,
  SystemStyleObject,
  useMediaQuery,
  useRadioGroup,
} from "@chakra-ui/react";
import Logo from "../../../../assets/logo.png";
import { RadioButton } from "../../LandingPage/RadioButton";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [isTablet] = useMediaQuery("(max-width: 1090px)");
  const [isMobile] = useMediaQuery("(max-width: 780px)");

  const radioOptions = [
    {
      nome: "Inicio",
      id: "1",
    },

    {
      nome: "Rockets",
      id: "2",
    },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "category",
    onChange: (e) => {
      e === "1" ? navigate(`/`) : "";
    },
  });

  const radioWrapperStyles: SystemStyleObject = isTablet
    ? isMobile
      ? {
          display: "flex",
          textAlign: "center",
        }
      : {
          display: "flex",
          textAlign: "center",
        }
    : {
        display: "flex",
        fontWeight: "500",
      };
  const group = getRootProps();
  return (
    <Flex padding="30px" w="100%" justifyContent="space-between">
      <Box>
        <Image src={Logo} maxW="150px" cursor="pointer" />
      </Box>
      <Box>
        <Box {...group} sx={radioWrapperStyles}>
          {radioOptions.map((card: any) => {
            const radio = getRadioProps({ value: card.id });
            return (
              <Box key={card.id}>
                <RadioButton key={card.id} {...radio}>
                  {card.nome}
                </RadioButton>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
