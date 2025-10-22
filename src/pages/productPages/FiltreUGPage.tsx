import ug1 from "../../assets/filtreUniteGainable/ug1.jpg"
import ug2 from "../../assets/filtreUniteGainable/ug2.jpg"
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const FiltreUGPage = () => {
  const images = [ug1,ug2];

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
              <ProductInfo productName="Filtre Pour Unité Gainable" description="Les filtres glissières se trouvant à l’arrière des unités gainables qui doivent être tout le temps propres." />
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center><Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 2)} /> 
        </Center>
      </Box>
    </AuroraBackground>
  )
}

export default FiltreUGPage