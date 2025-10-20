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
  maxW="550px"
  boxShadow= "10px 25px 25px rgba(22, 21, 27, 0.3)"
  display="flex"
  flexDirection="column"
  transition="all 0.4s ease"
  _hover={{
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 10px 25px rgba(0, 79, 135, 0.25)",
  }}
>
      <CardBody display="flex" flexDirection="column" flex="1" p="4" >
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
              bg="transparent"
              color="#0B2131"
              justify="center"
              align="center"
              border="2px solid #0B2131"
              borderRadius="md"
              fontWeight="bold"
              transition="all 0.3s ease"
              _hover={{
                bg: "#0B2131",
                color: "white",
                transform: "translateY(-3px)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 3)",
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
