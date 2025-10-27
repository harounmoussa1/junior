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
      w="full"
      maxW="380px"
      boxShadow="20px 0px 15px rgba(0, 0, 0, 0.2)" // ombre normale
      display="flex"
      flexDirection="column"
      transition="all 0.3s ease"
      _hover={{ boxShadow: "xl",
                transform: "translateY(-6px)", // légère éléva

       }} // ombre plus forte au survol
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

        <Flex justify="center" mt="auto">
          <Link
            href={link}
            _hover={{ textDecoration: "none" }}
            w="full"
          >
            <Flex
              as="button"
              border={"1px solid black"}
              w="full"
              h="40px"
              bg="transparent"
              color="black"
              justify="center"
              align="center"
              borderRadius="md"
              fontWeight="semibold"
              boxShadow="md"
              transition="all 0.3s ease"
             _hover={{
                  bgGradient: "linear(to-r, #104868ff, #35627cff)",
                  borderColor: "transparent",
                  color:"white",
                  boxShadow: "0 0 15px rgba(0, 119, 182, 0.6)",
                }}
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