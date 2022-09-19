import React, { useState, useEffect } from "react";
import { Box, Button, Icon, Stack, Text } from "@chakra-ui/react";
import Header from "../../components/Common/Header";
import { useApi } from "../../services/api";
import Footer from "../../components/Common/Footer";
import { TbRocket } from "react-icons/tb";
import Card from "../../components/LandingPage/Card/Index";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const api = useApi();
  const [info, setInfo] = useState([]);

  const [itensPerpage, setItensPerpage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  async function GetRockets() {
    const rockets = await api.getAllRockets();
    setInfo(rockets);
  }

  const pages = info.length / itensPerpage;
  const startIndex = currentPage * itensPerpage;
  const endIndex = startIndex + itensPerpage;
  const currentItens = info.slice(startIndex, endIndex);

  useEffect(() => {
    setTimeout(() => {
      GetRockets();
    }, 1000);
  }, []);

  return (
    <Stack w="100%" h="100%" align="center" justify="space-between">
      <Header />
      <Box
        w="100%"
        display="flex"
        flexDir={["column", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        pt="100px"
      >
        <Icon
          as={TbRocket}
          w={["130px", "100px", "150px"]}
          h={["130px", "100px", "150px"]}
          color="purple.primary"
        />
        <Box w={["50%", "50%", "unset"]}>
          <Text
            color="purple.dark"
            fontSize={["30px", "30px", "50px"]}
            fontWeight="700"
          >
            CONHEÇA
          </Text>
          <Text
            color="purple.primary"
            fontSize={["30px", "30px", "45px"]}
            fontWeight="700"
          >
            SOBRE ALGUNS FOGUETES!
          </Text>
        </Box>
      </Box>
      <Stack flexDir={["column", "column", "row", "row"]} pt="50px" gap="30">
        {currentItens &&
          currentItens.map((card: any) => (
            <Card
              key={card.id}
              title={card.name}
              company={card.company}
              image={card.flickr_images[0]}
              click={() => navigate(`/Rocket/${card.id}`)}
            />
          ))}
      </Stack>
      <Stack
        w="100%"
        h="100%"
        pt="50px"
        pb="100px"
        align="center"
        justify="center"
      >
        <Box
          color="red"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {Array.from(Array(pages), (item, index) => {
            return (
              <Button
                margin="10px"
                variant="outline"
                w="40px"
                h="40px"
                value={index}
                onClick={(e) =>
                  setCurrentPage(Number((e.target as HTMLButtonElement).value))
                }
              >
                {index}
              </Button>
            );
          })}
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Home;
