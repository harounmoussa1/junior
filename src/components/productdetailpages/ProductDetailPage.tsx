import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Box,
    Flex,
} from "@chakra-ui/react";

interface ProductDetailProps {
    images: string[];
}

const ProductDetail = ({ images }: ProductDetailProps) => {
    const [activeImg, setActiveImg] = useState(images[0]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box className="max-w-5xl mx-auto px-4 py-8">
            <Flex direction="column" gap={6}>
                {/* Active Image */}
                <Box
                    onClick={onOpen}
                    cursor="pointer"
                    overflow="hidden"
                    border={"1px solid #000000ff"}
                    rounded="lg"
                    shadow="lg"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.02)" }}
                >
                    <Image
                        src={activeImg}
                        alt="Product"
                        w="full"
                        aspectRatio="1/1"
                        objectFit="cover"
                        rounded="lg"
                        bg={"#f5faffff"}

                    />
                </Box>

                {/* Thumbnails */}
                <Flex wrap="wrap" justify="center" gap={4}>
                    {images.map((img, index) => (
                        <Box
                            key={index}
                            onClick={() => setActiveImg(img)}
                            cursor="pointer"
                            rounded="md"
                            overflow="hidden"
                            borderWidth="2px"
                            
                            border={img === activeImg ? "1px solid #000000ff" :"3px solid blue.600" }
                            transition="all 0.2s"
                            w="80px"
                            h="80px"
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                w="full"
                                h="full"
                                objectFit="cover"
                                bg={"#f5faffff"}

                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>

            {/* Lightbox Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
                <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
                <ModalContent bg="transparent" boxShadow="none">
                    <ModalCloseButton
                        color="white"
                        size="lg"
                        bg="blackAlpha.400"
                        rounded="full"
                        _hover={{ bg: "blackAlpha.600" }}
                        m={4}
                    />
                    <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
                        <Image
                            src={activeImg}
                            alt="Product Fullscreen"
                            maxH="90vh"
                            maxW="90vw"
                            objectFit="contain"
                            rounded="md"
                            boxShadow="2xl"
                            bg="#f5faffff"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProductDetail;
