import {
  Box,
  Flex,
  Text,
  Image,
  Link as ChakraLink,
  Divider,
  IconButton,
  Grid,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-r, #0f172a, #12141D)"
      color="gray.200"
      py={10}
      px={{ base: 5, md: 20 }}
      zIndex={20}
    >
      {/* --- Effets de lumière floue (blurs) --- */}
      <Box
        position="absolute"
        bottom={{ base: "-60px", md: "-100px" }}
        left={{ base: "-60px", md: "-100px" }}
        w={{ base: "180px", md: "250px" }}
        h={{ base: "180px", md: "250px" }}
        bg="blue.600"
        filter="blur(120px)"
        opacity={0.5}
        zIndex={1}
      />
      <Box
        position="absolute"
        top={{ base: "-60px", md: "-100px" }}
        right={{ base: "-60px", md: "-100px" }}
        w={{ base: "180px", md: "250px" }}
        h={{ base: "180px", md: "250px" }}
        bg="cyan.500"
        filter="blur(130px)"
        opacity={0.4}
        zIndex={1}
      />

      {/* --- Contenu du footer --- */}
      <Box position="relative" zIndex={2}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="start"
          gap={10}
        >
          {/* Left: Logo + Description */}
          <Flex direction="column" gap={3} flex="1">
            <Flex align="center" gap={3}>
              <Image
                src="/sdaire_logo_rm.png"
                boxSize="70px"
                alt="Logo SD-AIR"
              />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="white">
                  S.D–AIR
                </Text>
                <Text fontSize="sm" color="gray.400">
                  LA DIFFUSION DE L’AIR
                </Text>
              </Box>
            </Flex>
            <Text fontSize="sm" color="gray.400" mt={2} lineHeight="1.6">
              SD’air (SARL), fondée en août 2014, est la première société
              tunisienne spécialisée dans la fabrication de gaines textiles et de manchettes souples. Installée à Jemmel, SD’air collabore avec des installateurs et des revendeurs spécialisés en climatisation et diffusion de l’air.
            </Text>
          </Flex>

          {/* Middle: Nos Produits */}
          <Flex direction="column" gap={2} flex="1">
            <Text
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="wide"
              color="gray.400"
              mb={2}
            >
              Nos Produits
            </Text>
            <Text>Climatisation</Text>
            <Text>Isolation thermique</Text>
            <Text>Airbags thermiques</Text>
            <Text>Tentes à usages multiples</Text>
            <Text>Jeux gonflables</Text>
          </Flex>

          {/* Right: Contact */}
          <Flex direction="column" gap={2} flex="1">
            <Text
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="wide"
              color="gray.400"
              mb={2}
            >
              Contact
            </Text>
            <Grid templateColumns="auto 1fr" gap={3} fontSize="sm">
              <Text>Par téléphone :</Text>
              <Box>
                <Text>+216 73 590 888</Text>
                <Text>+216 54 554 754</Text>
              </Box>
            </Grid>

            <Text fontSize="sm">Par émail : sdairtn@gmail.com</Text>

            <Flex gap={4} mt={3}>
              <ChakraLink
                href="https://www.facebook.com/sdairtn/?locale=fr_FR"
                isExternal
              >
                <IconButton
                  icon={<FaFacebook />}
                  aria-label="Facebook"
                  variant="ghost"
                  color="white"
                  fontSize="22px"
                  _hover={{
                    color: "#1877F2",
                    transform: "scale(1.2)",
                  }}
                  transition="all 0.3s ease"
                />
              </ChakraLink>

              <ChakraLink href="https://www.linkedin.com/company/sdair-tunisie/" isExternal>
                <IconButton
                  icon={<FaLinkedin />}
                  aria-label="Linkendin"
                  variant="ghost"
                  color="white"
                  fontSize="22px"
                  _hover={{
                    color: "#1877F2",
                    transform: "scale(1.2)",
                  }}
                  transition="all 0.3s ease"
                />
              </ChakraLink>
            </Flex>
          </Flex>
        </Flex>

        {/* Divider */}
        <Divider my={8} borderColor="gray.700" />

        {/* Bottom Navigation */}
        <Flex
          justify="center"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={6}
          fontSize="sm"
          color="gray.400"
        >
          <Flex gap={8}>
            <Link to="/">Accueil</Link>
            <Text>Nos Produits</Text>
            <Link to="/apropos">À propos</Link>
            <Link to="/contact">Contact</Link>
          </Flex>
        </Flex>

        {/* Copyright */}
        <Text fontSize="xs" textAlign="center" mt={6} color="gray.500">
          JEENISo©2025. All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
