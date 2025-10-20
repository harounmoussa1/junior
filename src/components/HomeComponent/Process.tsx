import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/sdaire_logo_rm.png";
import { keyframes } from "@emotion/react";

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
    >
      {/* Titre */}
      <Heading
        as="h1"
        size={{ base: "xl", md: "3xl" }}
        color="#004F87"
        fontWeight="bold"
        mb={{ base: 10, md: 16 }}
        textAlign="center"
        animation={`${float} 2s ease-in-out infinite`}
      >
        Notre Process
      </Heading>

      {/* Layout principal */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 10, md: 10 }}
        maxW="900px"
        w="full"
      >
        {/* Colonne gauche */}
        <Flex
          direction="column"
          gap={{ base: 8, md: 10 }}
          flex="1"
          mt={{ base: 0, md: 10 }}
          align={{ base: "center", md: "flex-start" }}
        >
          {/* Bureau d'étude */}
          <Box
            bg="#4CABE1"
            color="white"
            p={{ base: 5, md: 8 }}
            rounded="2xl"
            shadow="lg"
            position="relative"
            w={{ base: "90%", md: "600px" }}
            h={{ base: "auto", md: "380px" }}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-10px) scale(1.02)",
              boxShadow: "0 8px 25px rgba(76, 171, 225, 0.5)",
              filter: "brightness(1.1)",
            }}
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: "22px", md: "32px" }}
              mb={3}
            >
              Bureau d’étude
            </Text>
            <Text fontSize={{ base: "16px", md: "22px" }} lineHeight="1.6">
              Préparation des différents plans des produits en utilisant les
              outils informatiques les plus adéquats avec un personnel bien formé.
            </Text>
            <Image
              src={logo}
              alt="Logo"
              position="absolute"
              bottom="10px"
              right="15px"
              w={{ base: "60px", md: "100px" }}
              opacity={0.8}
            />
          </Box>

          {/* Entretien */}
          <Box
            bg="#194A7F"
            color="white"
            p={{ base: 5, md: 8 }}
            rounded="2xl"
            shadow="lg"
            w={{ base: "90%", md: "450px" }}
            h={{ base: "auto", md: "320px" }}
            ml={{ base: 0, md: "150px" }}
            mt={{ base: 0, md: "-30px" }}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-10px) scale(1.02)",
              boxShadow: "0 8px 25px rgba(25, 74, 127, 0.5)",
              filter: "brightness(1.1)",
            }}
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: "22px", md: "32px" }}
              mb={3}
            >
              Entretien
            </Text>
            <Text fontSize={{ base: "16px", md: "22px" }} lineHeight="1.6">
              Les gaines textiles sont entretenues dans nos locaux et sont
              traitées pour leur donner une longue vie.
            </Text>
          </Box>
        </Flex>

        {/* Colonne droite */}
        <Box
          bg="#004F87"
          color="white"
          p={{ base: 5, md: 8 }}
          rounded="2xl"
          shadow="lg"
          w={{ base: "90%", md: "300px" }}
          h={{ base: "auto", md: "550px" }}
          ml={{ base: 0, md: "-30px" }}
          textAlign={{ base: "center", md: "left" }}
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 8px 25px rgba(0, 79, 135, 0.5)",
            filter: "brightness(1.1)",
          }}
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "22px", md: "32px" }}
            mb={3}
          >
            Fabrication
          </Text>
          <Text fontSize={{ base: "16px", md: "22px" }} lineHeight="1.6">
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