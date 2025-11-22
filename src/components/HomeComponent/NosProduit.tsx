import { Box, Flex, Heading } from "@chakra-ui/react";
import ProductsSlide from "./ProductsSlide";
import { products } from "../../constants";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const NosProduit = () => {
  return (
    <Box
      py={[10, 10]} // Responsive vertical padding
      px={[4, 8]} // Responsive horizontal padding
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="linear-gradient(to right, #6599BD, #16537E 69%)"
    >
      <Flex
        direction="column"
        mb={{ base: 8, md: 0 }}
        animation={`${float} 3s ease-in-out infinite`}
        align="flex-start"
        w="full"
        maxW="1200px"
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          color="#ffffffff"
          fontWeight="bold"
          mb={4}
          textAlign="left"
        >
          Nos Produits
        </Heading>
        <Heading
          as="h2"
          size={{ base: "15px", md: "20px" }}
          color="#ffffffff"
          fontWeight="semibold"
          maxW="800px"
          lineHeight="1.6"
          textAlign="left"
        >
          Explorez notre gamme complète de gaines textiles et manchettes souples, conçues pour répondre à vos besoins industriels les plus exigeants.
        </Heading>
      </Flex>
      <ProductsSlide slides={products} />
    </Box>
  );
};

export default NosProduit;