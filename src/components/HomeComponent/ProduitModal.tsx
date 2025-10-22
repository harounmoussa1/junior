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
      h={{ base: "520px", sm: "540px", md: "600px" }}
      w="full"
      maxW={{ base: "100%", md: "380px" }}
      boxShadow="lg"
      display="flex"
      flexDirection="column"
    >
      <CardBody display="flex" flexDirection="column" flex="1" p={{ base: 3, md: 4 }}>
        {/* Product Image */}
        <Image
          src={imageUrl}
          alt={name}
          borderRadius="lg"
          h={{ base: "200px", md: "260px" }}
          w="100%"
          objectFit="cover"
        />

        {/* Title + Description */}
        <Stack mt={{ base: 3, md: 4 }} spacing={{ base: 2, md: 3 }} flex="1" overflow="hidden">
          <Heading size={{ base: "sm", md: "md" }}>{name}</Heading>
          <Text 
            flex="1" 
            fontSize={{ base: "sm", md: "md" }}
            noOfLines={{ base: 4, md: 5 }}
            overflow="hidden"
          >
            {description}
          </Text>
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
              h={{ base: "40px", md: "45px" }}
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