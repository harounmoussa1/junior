import { useEffect, useState } from 'react';
import { Box, Text, VStack, Code } from '@chakra-ui/react';
import { client } from '../sanity/sanityClient';

const DebugPage = () => {
  const [debug, setDebug] = useState<any>(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test 1: Vérifier si le token existe
        const hasToken = !!import.meta.env.VITE_SANITY_WRITE_TOKEN;
        
        // Test 2: Récupérer les avis
        const opinions = await client.fetch('*[_type == "publicOpinion"]');
        
        setDebug({
          hasToken,
          tokenLength: import.meta.env.VITE_SANITY_WRITE_TOKEN?.length || 0,
          opinionsCount: opinions.length,
          opinions: opinions,
          success: true
        });
      } catch (error: any) {
        setDebug({
          error: error.message,
          success: false
        });
      }
    };

    testConnection();
  }, []);

  return (
    <Box p={8}>
      <Text fontSize="2xl" mb={4}>🔍 Debug Sanity Connection</Text>
      
      {debug ? (
        <VStack align="start" spacing={4}>
          <Text>✅ Token présent : {debug.hasToken ? 'OUI' : 'NON'}</Text>
          <Text>📏 Longueur du token : {debug.tokenLength}</Text>
          <Text>📊 Nombre d'avis : {debug.opinionsCount || 0}</Text>
          
          {debug.error && (
            <Box bg="red.100" p={4} borderRadius="md">
              <Text color="red.600">❌ Erreur : {debug.error}</Text>
            </Box>
          )}
          
          {debug.opinions && debug.opinions.length > 0 && (
            <Box>
              <Text fontWeight="bold" mb={2}>Avis trouvés :</Text>
              <Code display="block" whiteSpace="pre" p={4}>
                {JSON.stringify(debug.opinions, null, 2)}
              </Code>
            </Box>
          )}
        </VStack>
      ) : (
        <Text>Chargement...</Text>
      )}
    </Box>
  );
};

export default DebugPage;
