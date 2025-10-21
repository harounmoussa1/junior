import airbagth1 from "../../assets/airbagImg/airbagth1.png"
import airbagth2 from "../../assets/airbagImg/airbagth2.jpeg"
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';

const AirbagThPage = () => {
  const images = [airbagth1,airbagth2];

  return (
    <div>
  <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
  <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
          {/* product photos */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <ProductDetail images={images} />
          </div>

          {/* product description */}
       <ProductInfo productName="Airbags thermique"
        description="Les air-bag thermiques sont utilisés pour réduire les espaces vides dans une chambre froide pour les produits laitiers." />
    </div>
 </Flex>
</Box>
<Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
</Center>
<Center mt={0} marginRight={0}>
<ProductsSlide slides={products.filter(product => product.id !== 6)} /> </Center>
 </div>
  )
}

export default AirbagThPage