import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import matela1 from "../../assets/matelasImg/matela1.jpg"
import matela2 from "../../assets/matelasImg/matelas2.jpg"
import matela3 from "../../assets/matelasImg/matelas3.jpg"
import matela4 from "../../assets/matelasImg/matelas4.jpg"
import matelas5 from "../../assets/matelasImg/matelas5.jpg"
import matelas6 from "../../assets/matelasImg/matelas5.jpeg"
import matelas7 from "../../assets/matelasImg/matelas6.jpeg"
import matelas8 from "../../assets/matelasImg/matelas7.jpeg"

import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const MatelasPrPage = () => {
  const images = [matela1,matela2,matela3,matela4,matelas5,matelas6,matelas7,matelas8];

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
              <ProductInfo productName="Matelas de protection thermique" 
                description="La protection thermique des vannes permet d’isoler efficacement les équipements contre les pertes de chaleur, tout en assurant la sécurité du personnel contre les brûlures. Ces isolations sont conçues pour résister à des températures élevées et aux conditions extérieures (humidité, poussière, UV). Elles contribuent aussi à l'économie d’énergie dans les installations industrielles, réseaux de chauffage ou circuits de vapeur.

Disponibles en plusieurs tailles et plusieurs épaisseurs, avec des housses amovibles pour un entretien facile." />
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center><Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 5)} /> 
        </Center>
      </Box>
    </AuroraBackground>
  )
}

export default MatelasPrPage