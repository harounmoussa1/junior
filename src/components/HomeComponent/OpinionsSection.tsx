import { useEffect, useState } from 'react';
import { Box, Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import SlideSwiper, { Slide } from "../contactcomponents/SlideSwiper";
import { getPublicOpinions, Opinion } from '../../sanity/opinionsApi';
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const OpinionsSection = () => {
  const [opinions, setOpinions] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const data = await getPublicOpinions();

        // Convertir les opinions Sanity au format Slide
        const slides: Slide[] = data.map((opinion: Opinion) => ({
          name: opinion.name,
          avis: opinion.avis,
        }));

        setOpinions(slides);
      } catch (err) {
        console.error('Erreur lors du chargement des avis:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Charger les avis une seule fois (pas de rafraîchissement automatique)
    fetchOpinions();
  }, []);

  if (isLoading) {
    return (
      <Center py={10}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#4CABE1"
          size="xl"
        />
      </Center>
    );
  }

  if (opinions.length === 0) {
    return null; // Ne rien afficher s'il n'y a pas d'avis
  }

  return (
    <Box>
      <Box position="relative">
        {/* Blur Background Effect */}
        

        <Flex
          direction="column"
          align="center"
          mb={{ base: 5, md: 5 }}
          mt={{ base: 8, md: 40 }}
          animation={`${float} 3s ease-in-out infinite`}
        >
          
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            color="#3C3C3C"
            fontWeight="bold"
            mb={5}
            textAlign="center"
          >
            Opinions des Clients
          </Heading>
          <Heading
            as="h2"
            size={{ base: "xs", md: "sm" }}
            color="#3C3C3C"
            fontWeight="semibold"
            textAlign="center"
            maxW="800px"
            lineHeight="1.6"
            px={4}
          >
            Découvrez ce que nos clients pensent de nos produits et services.
          </Heading>
          
        </Flex>
        
      </Box>
      <Box
          position="absolute"
          top="78%"
          left="50%"
          transform="translate(-50%, -50%)"
          w={{ base: "300px", md: "600px" }}
          h={{ base: "300px", md: "500px" }}
          bg="#abc7ddff"
          filter="blur(100px)"
          rounded="full"
          zIndex="-1"
        />
      <Center mt={100} px={4}>
        <Box w="full" maxW="1400px">
          <SlideSwiper slides={opinions} showMultiple={true} />
        </Box>
      </Center>
    </Box>
  );
};

export default OpinionsSection;
