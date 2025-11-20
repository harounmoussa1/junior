import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import c1 from "../../assets/couvercleImg/c1.png";
import c2 from "../../assets/couvercleImg/c2.png";
import c3 from "../../assets/couvercleImg/c3.png";
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const CouverclePrPage = () => {
  const images = [c1,c2,c3];

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
              <ProductInfo productName="Couvercles de protection" 
                description="Le couvercle de protection est conçu pour offrir une couverture fiable et sécurisée pour différents équipements, réservoirs, palettes ou dispositifs sensibles. Il protège contre la poussière, les débris, l'humidité et autres éléments extérieurs susceptibles d'endommager vos installations. Fabriqué en PVC, ce couvercle est idéal pour une utilisation industrielle, domestique ou dans des environnements extérieurs.

                Facile à installer et durable, il garantit la longévité de vos équipements et offre une protection simple mais efficace contre les risques physiques ou environnementaux." />
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center>
        <Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 4)} /> 
        </Center>
      </Box>
    </AuroraBackground>
  )
}

export default CouverclePrPage