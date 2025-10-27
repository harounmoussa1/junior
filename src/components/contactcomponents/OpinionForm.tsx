import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react';
import { submitOpinion, OpinionInput } from '../../sanity/opinionsApi';

const OpinionForm = () => {
  const [formData, setFormData] = useState<OpinionInput>({
    name: '',
    email: '',
    avis: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const toast = useToast();

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.avis.trim()) {
      newErrors.avis = 'L\'avis est requis';
    } else if (formData.avis.trim().length < 10) {
      newErrors.avis = 'L\'avis doit contenir au moins 10 caractères';
    } else if (formData.avis.trim().length > 500) {
      newErrors.avis = 'L\'avis ne peut pas dépasser 500 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitOpinion(formData);
      
      toast({
        title: 'Avis soumis avec succès!',
        description: 'Votre avis a été publié. Merci pour votre retour !',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        avis: '',
      });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de l\'envoi de votre avis.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <Box
      maxW="600px"
      mx="auto"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        mb={6}
        textAlign="center"
        bgGradient="linear(to-r, #4CABE1, #004F87)"
        bgClip="text"
      >
        Partagez votre expérience
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.name} isRequired>
            <FormLabel>Nom</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              focusBorderColor="#4CABE1"
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
              focusBorderColor="#4CABE1"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.avis} isRequired>
            <FormLabel>Votre avis</FormLabel>
            <Textarea
              name="avis"
              value={formData.avis}
              onChange={handleChange}
              placeholder="Partagez votre expérience avec nous..."
              rows={6}
              focusBorderColor="#4CABE1"
              resize="vertical"
            />
            <FormErrorMessage>{errors.avis}</FormErrorMessage>
            <Text fontSize="sm" color="gray.500" mt={1}>
              {formData.avis.length}/500 caractères
            </Text>
          </FormControl>

          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Envoi en cours..."
            bgGradient="linear(to-r, #4CABE1, #004F87)"
            color="white"
            width="full"
            size="lg"
            _hover={{
              bgGradient: 'linear(to-r, #004F87, #4CABE1)',
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            transition="all 0.3s"
          >
            Envoyer mon avis
          </Button>
        </VStack>
      </form>

      <Text fontSize="xs" color="gray.500" mt={4} textAlign="center">
        Votre avis sera publié immédiatement
      </Text>
    </Box>
  );
};

export default OpinionForm;
