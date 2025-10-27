import { useEffect, useState } from 'react';
import { Box, Spinner, Text, Center } from '@chakra-ui/react';
import SlideSwiper, { Slide } from './SlideSwiper';
import { getPublicOpinions, Opinion } from '../../sanity/opinionsApi';

const PublicOpinionsDisplay = () => {
  const [opinions, setOpinions] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        setIsLoading(true);
        const data = await getPublicOpinions();
        
        // Convertir les opinions Sanity au format Slide
        const slides: Slide[] = data.map((opinion: Opinion) => ({
          name: opinion.name,
          avis: opinion.avis,
        }));
        
        setOpinions(slides);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des avis:', err);
        setError('Impossible de charger les avis pour le moment.');
      } finally {
        setIsLoading(false);
      }
    };

    // Charger les avis au montage
    fetchOpinions();

    // Rafraîchir automatiquement toutes les 30 secondes
    const interval = setInterval(() => {
      fetchOpinions();
    }, 30000);

    // Nettoyer l'interval au démontage
    return () => clearInterval(interval);
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

  if (error) {
    return (
      <Center py={10}>
        <Text color="red.500">{error}</Text>
      </Center>
    );
  }

  if (opinions.length === 0) {
    return (
      <Center py={10}>
        <Text color="gray.500" fontSize="lg">
          Aucun avis disponible pour le moment.
        </Text>
      </Center>
    );
  }

  return (
    <Box w="full" py={8}>
      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        mb={8}
        textAlign="center"
        bgGradient="linear(to-r, #4CABE1, #004F87)"
        bgClip="text"
      >
        Ce que nos clients disent de nous
      </Text>
      <SlideSwiper slides={opinions} showMultiple={true} />
    </Box>
  );
};

export default PublicOpinionsDisplay;
