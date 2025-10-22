import { Box, Center, Text } from "@chakra-ui/react";
interface SecondHeaderProps {
  title: string;
  subtitle: string;
  imageUrl:string;
  height:string;
  textsize:string;
}

const SecondHeader: React.FC<SecondHeaderProps> = ({ title, subtitle, imageUrl,height,textsize }) => {
  return (
    <Box mt="80px" w="100vw" position="relative" left="50%" right="50%" ml="-50vw" mr="-50vw">
      <Center  
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} 
        h={height} 
        color="white" 
        w="100%"
      >
        <Box textAlign="center" px={4}>
          <Text as="b" fontSize={{ base: "32px", md: "45px" }} display="block">
            {title}
          </Text>
          <Text fontSize={{ base: "14px", md: textsize }} display="block" mt={2}>
            {subtitle}
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default SecondHeader;