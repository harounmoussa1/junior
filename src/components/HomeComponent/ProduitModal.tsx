import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProduitModalProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const MotionCard = motion(Card);
const MotionButton = motion(Flex);

const ProduitModal: React.FC<ProduitModalProps> = ({
  name,
  description,
  imageUrl,
  link,
}) => {
  return (
    <MotionCard
      h="600px"
      w="full"
      maxW="380px"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      borderRadius="xl"
      transition="all 0.3s ease"
      boxShadow="10px 10px 15px rgba(0, 0, 0, 0.4)"
      whileHover={{ scale: 1.03 }}
      _hover={{
        boxShadow: "8px 20px 15px rgba(0, 0, 0, 0.4)",
      }}
    >
      <CardBody display="flex" flexDirection="column" flex="1" p="4">
        {/* Image du produit */}
        <Image
          src={imageUrl}
          alt={name}
          borderRadius="lg"
          h="260px"
          w="100%"
          objectFit="cover"
        />

        {/* Titre + Description */}
        <Stack mt="4" spacing="3" flex="1">
          <Heading size="md">{name}</Heading>
          <Text flex="1" color="gray.600">
            {description}
          </Text>
        </Stack>

        {/* Bouton "Voir plus" */}
        <Flex justify="center" mt="auto">
          <Link href={link} _hover={{ textDecoration: "none" }} w="full">
            <MotionButton
              as="button"
              w="full"
              h="45px"
              bg="transparent"
              color="black"
              justify="center"
              align="center"
              borderRadius="md"
              border={"1px solid black"}
              fontWeight="bold"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000000ff", // bleu plus foncé
                boxShadow: "0 20px 15px rgba(0, 0, 0, 0.4)",
                color: "white",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Voir plus
            </MotionButton>
          </Link>
        </Flex>
      </CardBody>
    </MotionCard>
  );
};

export default ProduitModal;
