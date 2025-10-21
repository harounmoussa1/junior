import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Animation d'apparition douce (retirée car non utilisée pour le fond)

// Animation de flottement permanent
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = () => {
  return (
    <Box position="relative" h="1100px" w="full" overflow="hidden" zIndex={5}>
      {/* Contenu au-dessus du gradient */}
      <Center position="relative" h="100%" zIndex={7} >
        {" "}
        <Box
          textAlign="center"
          color="white"
          mt="-170px"
          animation={`${float} 3s ease-in-out infinite`}
          w="full"
          maxW="1200px"
        >
          <Text
            as="b"
            fontSize={{ base: "40px", sm: "65px", md: "98px" }}
            display="block"
            textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
            color={"white"}
            px={{ base: 4, sm: 6, md: 8 }}
            maxW="100%"
            wordBreak="break-word"
          >
            SDair Tunisie
          </Text>

          <Text
            fontSize={{ base: "18px", sm: "20px", md: "24px", lg: "32px" }}
            mt={{ base: 6, sm: 8, md: 10 }}
            textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
            px={{ base: 2, sm: 4, md: 6, lg: 8 }}
            maxW={{ base: "31%", sm: "90%", md: "85%", lg: "80%" }}
            mx="auto"
            lineHeight={{ base: 1.3, sm: 1.5, md: 1.6, lg: 1.7 }}
            letterSpacing={{ base: "0.3px", md: "1px" }}
            mb={{ base: 1, sm: 2 }}
          >
            La première société Tunisienne spécialisée dans la
          </Text>
          <Text
            fontSize={{ base: "18px", sm: "20px", md: "24px", lg: "32px" }}
            display="block"
            textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
            px={{ base: 2, sm: 4, md: 6, lg: 8 }}
            maxW={{ base: "31%", sm: "90%", md: "85%", lg: "80%" }}
            mx="auto"
            lineHeight={{ base: 1.3, sm: 1.5, md: 1.6, lg: 1.7 }}
            letterSpacing={{ base: "0.3px", md: "1px" }}
          >
            fabrication des gaines textiles et manchettes souples
          </Text>

          <Flex justify="center" mt={20}>
            <Link href="/apropos" _hover={{ textDecoration: "none" }}>
              <Flex
                as="button"
                bg="transparent"
                color="white"
                px="40px"
                py="12px"
                borderRadius="3xl"
                border="1px solid white"
                fontSize="18px"
                transition="all 0.3s ease"
                _hover={{
                  bgGradient: "linear(to-r, #104868ff, #35627cff)",
                  borderColor: "transparent",
                  boxShadow: "0 0 15px rgba(0, 119, 182, 0.6)",
                }}
              >
                <Text
                  fontSize={{ base: "15px", md: "18px" }}
                  display="block"
                  textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
                >
                  Savoir Plus
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default HeroSection;
