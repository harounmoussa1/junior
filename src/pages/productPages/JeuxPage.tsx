import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import jeux1 from "../../assets/jeuxImg/jeux1.jpg"
import jeux2 from "../../assets/jeuxImg/jeux2.jpg"
import JEUX20 from "../../assets/jeuxImg/JEUX20.png"
import JEUX10 from "../../assets/jeuxImg/JEUX10.png"
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const JeuxPage = () => {
  const images = [jeux1,jeux2,JEUX20,JEUX10];

  return (
    <AuroraBackground>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
          <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
              {/* product photos */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain">
                <ProductDetail images={images} />
              </div>

              {/* product description */}
              <ProductInfo productName="Jeux Gonflables" 
                description="Les jeux gonflables sont une solution idéale pour animer vos événements en Tunisie : fêtes d’anniversaire, journées familiales, kermesses, événements scolaires ou animations commerciales. Faciles à installer, sécurisés et très appréciés des enfants, ils comprennent notamment des châteaux gonflables, parcours d’obstacles et jeux interactifs. Une animation ludique, colorée et adaptée à tous types de lieux, pour garantir une ambiance festive et conviviale." />
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center>
        <Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 8)} /> 
        </Center>
      </Box>
    </AuroraBackground>
  )
}

export default JeuxPage