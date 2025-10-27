import { useEffect, useState } from 'react';
import { Box, Center, Heading, Spinner } from "@chakra-ui/react";
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
      <Center>
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          color="#004F87"
          fontWeight="bold"
          mb={{ base: 12, md: 16 }}
          textAlign="center"
          animation={`${float} 2s ease-in-out infinite`}
        >
          Opinions des clients
        </Heading>
      </Center>
      <Center mt={100} px={4}>
        <Box w="full" maxW="1400px">
          <SlideSwiper slides={opinions} showMultiple={true} />
        </Box>
      </Center>
    </Box>
  );
};

export default OpinionsSection;
