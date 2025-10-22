import { Box, Heading } from "@chakra-ui/react";
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
      py={[10, 20]} // Responsive vertical padding
      px={[4, 8]} // Responsive horizontal padding
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="70px"
    >
      <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl" }}
              color="#004F87"
              fontWeight="bold"
              mb={{ base: 12, md: 16 }}
              textAlign="center"
              animation={`${float} 2s ease-in-out infinite`}
            >
              Nos Produits
            </Heading>
      <ProductsSlide slides={products} />
    </Box>
  );
};

export default NosProduit;