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
        >
          <Text
            as="b"
            fontSize={{ base: "70px", md: "98px" }}
            display="block"
            textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
            color={"white"}
          >
            SDair Tunisie
          </Text>

          <Text
            fontSize={{ base: "20px", md: "32px" }}
            display="block"
            mt={10}
            textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
          >
            La première société Tunisienne spécialisée dans la fabrication
          </Text>
          <Text
            fontSize={{ base: "20px", md: "32px" }}
            display="block"
            textShadow="2px 4px 15px rgba(0, 0, 0, 0.8)"
          >
            des gaines textiles et manchettes souples
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
