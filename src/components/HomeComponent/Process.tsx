import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaLightbulb, FaWrench, FaHardHat } from "react-icons/fa";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const ProcessSection = () => {
  return (
    <Box
      position="relative"
      w="full"
      py={{ base: 10, md: 20 }}
      className="bg-transparent flex flex-col items-center"
      mt="-100px"
    >
      {/* Titre et Sous-titre */}
      <Flex
        direction="column"
        align="center"
        mb={{ base: 8, md: 12 }}
        animation={`${float} 3s ease-in-out infinite`}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          color="#3C3C3C"
          fontWeight="bold"
          mb={5}
          textAlign="center"
        >
          Notre Process
        </Heading>
        <Heading
          as="h2"
          size={{ base: "xs", md: "sm" }}
          color="#3C3C3C"
          fontWeight="semibold"
          textAlign="center"
          maxW="800px"
          lineHeight="1.6"
          px={4}
        >
          Chez SDair Tunisie, nous suivons un processus rigoureux qui garantit la qualité, la précision et la durabilité de nos solutions textiles.
        </Heading>
      </Flex>

      {/* Layout principal */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="stretch"
        gap={{ base: 6, md: 8 }}
        maxW="1200px"
        w="full"
        px={{ base: 4, md: 6 }}
      >
        {/* Bureau d'étude */}
        <Box
          bg="#C1866F"
          color="white"
          p={{ base: 6, md: 8 }}
          rounded="2xl"
          shadow="lg"
          position="relative"
          flex="1"
          minH={{ base: "280px", md: "350px" }}
          transition="all 0.3s ease"
          _hover={{
            transform: { base: "scale(1.02)", md: "translateY(-10px)" },
            boxShadow: "0 8px 25px rgba(193, 134, 111, 0.5)",
            filter: "brightness(1.1)",
          }}
        >
          <Flex
            bg="white"
            w="50px"
            h="50px"
            rounded="lg"
            align="center"
            justify="center"
            mb={6}
          >
            <Icon as={FaLightbulb} color="#C1866F" boxSize={6} />
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={{ base: "24px", md: "32px" }}
            mb={{ base: 4, md: 3 }}
          >
            Bureau d'étude
          </Text>
          <Text fontSize={{ base: "15px", md: "20px" }} lineHeight="1.5">
            Préparation des différents plans des produits en utilisant les
            outils informatiques les plus adéquats avec un personnel bien formé.
          </Text>
        
        </Box>

        {/* Entretien */}
        <Box
          bg="#16537E"
          color="white"
          p={{ base: 6, md: 8 }}
          rounded="2xl"
          shadow="lg"
          flex="1"
          minH={{ base: "280px", md: "350px" }}
          transition="all 0.3s ease"
          _hover={{
            transform: { base: "scale(1.02)", md: "translateY(-10px)" },
            boxShadow: "0 8px 25px rgba(22, 83, 126, 0.5)",
            filter: "brightness(1.1)",
          }}
        >
          <Flex
            bg="white"
            w="50px"
            h="50px"
            rounded="lg"
            align="center"
            justify="center"
            mb={6}
          >
            <Icon as={FaWrench} color="#16537E" boxSize={6} />
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={{ base: "24px", md: "32px" }}
            mb={{ base: 4, md: 3 }}
          >
            Entretien
          </Text>
          <Text fontSize={{ base: "15px", md: "20px" }} lineHeight="1.5">
            Les gaines textiles sont entretenues dans nos locaux et sont
            traitées pour leur donner une longue vie.
          </Text>
        </Box>

        {/* Fabrication */}
        <Box
          bg="#6599BD"
          color="white"
          p={{ base: 6, md: 8 }}
          rounded="2xl"
          shadow="lg"
          flex="1"
          minH={{ base: "280px", md: "350px" }}
          textAlign="left"
          transition="all 0.3s ease"
          _hover={{
            transform: { base: "scale(1.02)", md: "translateY(-10px)" },
            boxShadow: "0 8px 25px rgba(101, 153, 189, 0.5)",
            filter: "brightness(1.1)",
          }}
        >
          <Flex
            bg="white"
            w="50px"
            h="50px"
            rounded="lg"
            align="center"
            justify="center"
            mb={6}
          >
            <Icon as={FaHardHat} color="#6599BD" boxSize={6} />
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={{ base: "24px", md: "32px" }}
            mb={{ base: 4, md: 3 }}
          >
            Fabrication
          </Text>
          <Text fontSize={{ base: "15px", md: "20px" }} lineHeight="1.4">
            Les machines utilisées pour la coupe, le montage par fil ou sans fil
            et le contrôle sont des opérations bien étudiées et planifiées afin
            de combiner entre qualité et efficience.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProcessSection;