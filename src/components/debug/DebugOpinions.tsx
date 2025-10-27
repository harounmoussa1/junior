import { useEffect, useState } from 'react';
import { Box, Text, VStack, Badge } from '@chakra-ui/react';
import { client } from '../../sanity/sanityClient';

const DebugOpinions = () => {
  const [debug, setDebug] = useState<any>(null);

  useEffect(() => {
    const fetchDebug = async () => {
      try {
        // Tous les avis
        const allOpinions = await client.fetch('*[_type == "userOpinion"]');
        
        // Avis approuvés
        const approvedOpinions = await client.fetch('*[_type == "userOpinion" && approved == true]');
        
        // Avis non approuvés
        const pendingOpinions = await client.fetch('*[_type == "userOpinion" && approved == false]');

        setDebug({
          total: allOpinions.length,
          approved: approvedOpinions.length,
          pending: pendingOpinions.length,
          allOpinions: allOpinions,
          approvedOpinions: approvedOpinions
        });

        console.log('🔍 DEBUG SANITY:');
        console.log('Total avis:', allOpinions.length);
        console.log('Avis approuvés:', approvedOpinions.length);
        console.log('Avis en attente:', pendingOpinions.length);
        console.log('Tous les avis:', allOpinions);
      } catch (error) {
        console.error('Erreur debug:', error);
        setDebug({ error: error });
      }
    };

    fetchDebug();
  }, []);

  if (!debug) return <Text>Chargement debug...</Text>;

  return (
    <Box p={4} bg="yellow.100" borderRadius="md" my={4}>
      <Text fontWeight="bold" mb={2}>🔍 DEBUG SANITY</Text>
      <VStack align="start" spacing={2}>
        <Text>Total avis: <Badge colorScheme="blue">{debug.total}</Badge></Text>
        <Text>Avis approuvés: <Badge colorScheme="green">{debug.approved}</Badge></Text>
        <Text>Avis en attente: <Badge colorScheme="orange">{debug.pending}</Badge></Text>
        
        {debug.error && (
          <Text color="red.500">Erreur: {debug.error.message}</Text>
        )}

        {debug.allOpinions && debug.allOpinions.length > 0 && (
          <Box>
            <Text fontWeight="bold" mt={2}>Détails des avis:</Text>
            {debug.allOpinions.map((opinion: any, index: number) => (
              <Box key={index} p={2} bg="white" borderRadius="md" mt={1}>
                <Text fontSize="sm">
                  <strong>{opinion.name}</strong> - 
                  Approved: {opinion.approved ? '✅' : '❌'} - 
                  {opinion.avis?.substring(0, 50)}...
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default DebugOpinions;
