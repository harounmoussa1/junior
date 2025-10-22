import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Box, Text } from "@chakra-ui/react";

export type Slide = {
  name: string;
  avis: string;
  title?: string; // Optional title/position
};

interface SlideSwiperProps {
  slides: Slide[];
  showMultiple?: boolean; // Show 3 slides on desktop
}

const SlideSwiper = ({ slides, showMultiple = false }: SlideSwiperProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ 
        clickable: true,
        dynamicBullets: true 
      }}
      modules={[Pagination]}
      className="mySwiper"
      style={{
        paddingBottom: "40px",
        width: "100%",
        maxWidth: "100%",
      }}
      // Option pour forcer la même hauteur sur toutes les slides
      autoHeight={false}
      watchSlidesProgress={true}
      // Centrer le slide actif UNIQUEMENT sur tablette
      centeredSlides={false} // Désactivé par défaut
      breakpoints={
        showMultiple
          ? {
              // Mobile: 1 slide normal (aligné à gauche)
              0: { 
                slidesPerView: 1, 
                spaceBetween: 20,
                centeredSlides: false
              },
              // Tablet: 2 slides, CENTRÉ
              768: { 
                slidesPerView: 2, 
                spaceBetween: 30,
                centeredSlides: true // Activé uniquement sur tablette
              },
              // Desktop: 3 slides normal (aligné à gauche)
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 0,
                centeredSlides: false
              },
            }
          : {
              // Pour une seule slide, on garde les breakpoints par défaut
              0: { 
                slidesPerView: 1,
                centeredSlides: false
              }
            }
      }
      // Option pour que le premier slide soit centré au début (sur tablette)
      initialSlide={0}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            height: "auto",
          }}
        >
          <Box
            w="full"
            maxW={{ base: "370px", sm: "400px", md: "440px" }}
            borderRadius="20px"
            overflow="hidden"
            boxShadow="md"
            bgGradient="linear(to-r, #4CABE1, #004F87 )"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "xl",
            }}
            paddingLeft="15px"
            paddingRight="15px"
            paddingBottom="15px"
            mx="auto"
            // Force la même hauteur pour toutes les cartes
            h={{ base: "300px", md: "390px" }}
          >
            {/* Header section - HAUTEUR FIXE */}
            <Box 
              textAlign="center" 
              mt={2} 
              px={2}
              minH="50px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="white"
                noOfLines={2}
              >
                {slide.name}
              </Text>
              {slide.title && (
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="whiteAlpha.900"
                  mt={1}
                  noOfLines={1}
                >
                  {slide.title}
                </Text>
              )}
            </Box>

            {/* White card section - Prend toute la hauteur disponible */}
            <Box
              mb={2}
              bg="white"
              borderRadius="16px"
              boxShadow="base"
              p={4}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              w="full"
              flex="1"
              minH="0"
            >
              {/* Texte de l'avis CENTRÉ verticalement et horizontalement */}
              <Box 
                flex="1" 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                overflowY="auto"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#c1c1c1',
                    borderRadius: '2px',
                  },
                }}
              >
                <Text
                  color="black"
                  fontSize={{ base: "xs", md: "md" }}
                  lineHeight="1.5"
                  textAlign="center"
                  width="100%"
                >
                  {slide.avis}
                </Text>
              </Box>

              {/* Section nom et titre en bas */}
              <Box textAlign="center" mt={0} mb={4} pt={4} >
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "xs", md: "xs" }}
                  color="black"
                >
                  {slide.name}
                </Text>
                {slide.title && (
                  <Text
                    fontSize={{ base: "xs", md: "xs" }}
                    color="#0073C2"
                  >
                    {slide.title}
                  </Text>
                )}
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideSwiper;