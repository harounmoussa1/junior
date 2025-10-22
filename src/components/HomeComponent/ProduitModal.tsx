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

interface ProduitModalProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProduitModal: React.FC<ProduitModalProps> = ({
  name,
  description,
  imageUrl,
  link,
}) => {
  return (
    <Card
      h="600px"
      w="full" // Make it responsive
      maxW="380px" // Max width for large screens
      boxShadow="lg"
      display="flex"
      flexDirection="column"
    >
      <CardBody display="flex" flexDirection="column" flex="1" p="4">
        {/* Product Image */}
        <Image
          src={imageUrl}
          alt={name}
          borderRadius="lg"
          h="260px"
          w="100%"
          objectFit="cover"
        />

        {/* Title + Description */}
        <Stack mt="4" spacing="3" flex="1">
          <Heading size="md">{name}</Heading>
          <Text flex="1">{description}</Text>
        </Stack>

        {/* Voir Plus Button */}
        <Flex justify="center" mt="auto">
          <Link
            href={link}
            _hover={{ textDecoration: "none" }}
            w="full"
          >
            <Flex
              as="button"
              w="full"
              h="40px"
              bg="blue.500"
              color="white"
              justify="center"
              align="center"
              borderRadius="md"
              fontWeight="bold"
              _hover={{ bg: "blue.600" }}
            >
              Voir plus
            </Flex>
          </Link>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProduitModal;