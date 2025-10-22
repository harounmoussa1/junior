import { Box, Heading } from "@chakra-ui/react";
import ProductsSlide from "./ProductsSlide";
import { products } from "../../constants";

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
        color="#004F87" 
        textAlign="center" 
        fontSize={[30, 40, 50]} // Responsive font size
      >
        Nos Produits
      </Heading>
      <ProductsSlide slides={products} />
    </Box>
  );
};

export default NosProduit;