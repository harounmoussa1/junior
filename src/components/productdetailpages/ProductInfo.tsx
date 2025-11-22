import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

interface ProductInfoProps {
  productName: string;
  description: string;
}

const ProductInfo = ({ productName, description }: ProductInfoProps) => {

  return (

    <Card
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      bg={"#f5faffff"}
      border={"1px solid #000000ff"}

      color="white"
      p="6"
    >
      <CardHeader>
        <Heading fontSize={{ base: "30px", md: "40px", lg: "45px" }} color="#004F87" fontFamily="montserrat" fontWeight="bold">
          {productName}
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading fontSize={{ base: "15px", md: "20px", lg: "25px" }} color="black" fontFamily="montserrat" fontWeight="normal">
          {description}
        </Heading>

      </CardBody>
    </Card>
  );
};

export default ProductInfo;
