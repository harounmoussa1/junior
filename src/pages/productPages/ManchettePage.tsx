import manchette from "../../assets/manchette.jpeg"
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const ManchettePage = () => {
  const images = [manchette];

  return (
    <AuroraBackground>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
          <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
              {/* product photos */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <ProductDetail images={images} />
              </div>

              {/* product description */}
              <ProductInfo productName="Manchettes souples" description="Toute sorte de manchettes souples à savoir les rectangulaires-rectangulaire, de transformation rectangulaire- circulaires, rond-ronds, etc…." />
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center>
        <Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 3)} /> 
        </Center>
      </Box>
    </AuroraBackground>
  )
}

export default ManchettePage