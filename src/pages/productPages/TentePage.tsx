import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import couvercle1 from "../../assets/tenteIMG/couvercle1.jpg"
import couvercle2 from "../../assets/tenteIMG/couvercle2.jpg"
import couvercle3 from "../../assets/tenteIMG/couvercle3.jpg"
import new1 from "../../assets/tenteIMG/new1.jpeg"
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const TentePage = () => {
  const images = [couvercle1,couvercle2,couvercle3,new1];

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
              <ProductInfo productName="Tente à usage multiple" 
                description="Une tente à usage multiple est idéale pour les sorties en famille, les voyages, les pique-niques, les fêtes ou même comme abri temporaire à la maison. Facile à installer et à transporter, elle offre une bonne protection contre le soleil, le vent et la pluie. Fabriquée avec des matériaux solides, elle est conçue pour durer." />
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center>
        <Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 7)} /> 
        </Center>
      </Box>
    </AuroraBackground>
  )
}

export default TentePage