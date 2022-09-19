import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TbRocket } from "react-icons/tb";
import { useParams } from "react-router-dom";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import { useApi } from "../../services/api";

interface Object {
  name: string;
  company: string;
  description: string;
  height: {
    meters: string;
  };
  diameter: {
    meters: string;
  };
  mass: {
    kg: string;
  };
  flickr_images: [];
}

const Rocket: React.FC = () => {
  const { id } = useParams();
  const api = useApi();
  const [info, setInfo] = useState<Object>({
    name: "",
    company: "",
    description: "",
    height: {
      meters: "",
    },
    diameter: {
      meters: "",
    },
    mass: {
      kg: "",
    },
    flickr_images: [],
  });

  async function GetRocket() {
    const rocket = await api.getOneRocket(`${id}`);
    setInfo(rocket);
  }

  useEffect(() => {
    setTimeout(() => {
      GetRocket();
    }, 1000);
  }, []);
  return (
    <Stack w="100%" h="100%" align="center" justifyContent="space-between">
      <Header />

      <Box
        display="flex"
        flexDir={["column", "row", "row"]}
        alignItems="center"
        pt="100px"
      >
        <Icon as={TbRocket} w="150px" h="150px" color="purple.primary" />
        <Box paddingLeft="20px">
          <Text color="purple.dark" fontSize="45px" fontWeight="700">
            {info.name}
          </Text>
          <Text color="purple.primary" fontSize="45px" fontWeight="700">
            {info.company}
          </Text>
        </Box>
      </Box>
      <Stack w="100%" maxW="900px">
        <Box mt="50px" textAlign="center" padding="40px" fontWeight={400}>
          {info.description}
        </Box>
        {info && (
          <Flex
            w="100%"
            pt="100px"
            flexDir={["column", "column", "row"]}
            justify="space-between"
          >
            <Box
              w="100%"
              pt="20px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="purple.dark" fontSize="45px" fontWeight="700">
                Height
              </Text>
              <Text color="purple.primary" fontSize="45px" fontWeight="700">
                {info.height.meters}
              </Text>
            </Box>
            <Box
              w="100%"
              pt="20px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="purple.dark" fontSize="45px" fontWeight="700">
                Diameter
              </Text>
              <Text color="purple.primary" fontSize="45px" fontWeight="700">
                {info.diameter.meters}
              </Text>
            </Box>
            <Box
              w="100%"
              pt="20px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="purple.dark" fontSize="45px" fontWeight="700">
                Mass
              </Text>
              <Text color="purple.primary" fontSize="45px" fontWeight="700">
                {info.mass.kg}
              </Text>
            </Box>
          </Flex>
        )}
        <Stack
          pt="100px"
          pb="200px"
          display="grid"
          w="100%"
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap="50"
          align="center"
          justify="center"
        >
          {info.flickr_images.map((image) => (
            <Image
              padding="60px"
              src={image}
              w="100%"
              h="100%"
              borderRadius="20px"
              boxShadow="10px 10px 148px rgba(84, 90, 232, 0.11)"
              referrerPolicy="no-referrer"
            />
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Rocket;
