import ProductDetail from "../../components/productdetailpages/ProductDetailPage";
import ImgTextile1 from "../../assets/gaineTextileImg/ImgTextile1.jpg";
import ImgTextile2 from "../../assets/gaineTextileImg/ImgTextile2.jpg";
import ImgTextile3 from "../../assets/gaineTextileImg/ImgTextil3.jpg";
import obl1 from "../../assets/gaineTextileImg/obl1.jpeg";
import obl2 from "../../assets/gaineTextileImg/obl2.jpeg";
import gaine1 from "../../assets/gaineTextileImg/gaine1.png";
import gaine2 from "../../assets/gaineTextileImg/gaine2.png";
import gaine3 from "../../assets/gaineTextileImg/gaine3.png";
import gaine4 from "../../assets/gaineTextileImg/gaine4.png";
import gaine5 from "../../assets/gaineTextileImg/gaine5.png";
import gaine6 from "../../assets/gaineTextileImg/gaine6.png";
import gaine7 from "../../assets/gaineTextileImg/gaine7.png";
import gaine8 from "../../assets/gaineTextileImg/gaine8.png";
import gaine9 from "../../assets/gaineTextileImg/gaine9.png";

import pdf from "../../../public/gaine.pdf";
import { Box, Card, CardBody, CardHeader, Center, Flex, Heading } from "@chakra-ui/react";
import ProductsSlide from "../../components/HomeComponent/ProductsSlide";
import { products } from "../../constants";
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora-background";

const GainTextilePage = () => {
  const images = [ImgTextile1, ImgTextile2, ImgTextile3, obl1, obl2, gaine1, gaine2, gaine3, gaine4, gaine5, gaine6, gaine7, gaine8, gaine9];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf; // Path to your PDF file
    link.download = "gaine.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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

              <Card
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                backgroundColor="white"
                color="white"
                p="6"
              >
                <CardHeader>
                  <Heading fontSize={{ base: "30px", md: "40px", lg: "45px" }} color="#004F87" fontFamily="montserrat" fontWeight="bold">
                    Gaine Textile        </Heading>
                </CardHeader>
                <CardBody>
                  <Heading fontSize={{ base: "15px", md: "20px", lg: "25px" }} color="black" fontFamily="montserrat">
                    Toute sorte de forme à savoir les circulaires, demi-circulaires, oblong, quart de cercle.
                    Le tissu utilisé est de classement au feu M0 ou M1 ou non classé.    </Heading>
                  <Flex
                    onClick={handleDownload}
                    mt={20}
                    padding={1}
                    as="button"
                    w="full"
                    h="40px"
                    bg="blue.500"
                    color="white"
                    justify="center"
                    align="center"
                    borderRadius="md"
                    fontSize={{ base: "13px", md: "16px", lg: "17px" }}
                    fontWeight="semibold"
                    _hover={{ bg: "blue.600" }}
                  >
                    Fiche Technique (télécharger pdf)
                  </Flex>

                </CardBody>
              </Card>
            </div>
          </Flex>
        </Box>
        <Center><Heading mt={20} paddingLeft={0} color="#004F87">Autres Produits</Heading>
        </Center><Center mt={0} marginRight={0}>
          <ProductsSlide slides={products.filter(product => product.id !== 1)} /> </Center>
      </Box>
    </AuroraBackground>
  )
};

export default GainTextilePage;
