import { CardBody, Center, Heading, Stack, Text, Image, Card, SimpleGrid, Box, Input, Flex, Link, IconButton, Button, useToast, Textarea } from "@chakra-ui/react";
import SecondHeader from "../components/navbar/SecondHeader";
import { Fondateur_Presentation, ABOUT_TEXT } from '../constants/index.ts';
import Fondateur2 from "../assets/Fondateur2.png";
import entreprise from "../assets/entreprise.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import SlideSwiper, { Slide } from "../components/contactcomponents/SlideSwiper";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { client } from  "../sanity/sanityClient.ts";
import aproposimg from '../assets/hero.png';

interface IFormInput {
  Name: string;
  avis: string;
  email: string;
}

const AproposPage = () => {
  const [slidesData, setSlidesData] = useState<Slide[]>([]);
  const toast = useToast();
  const [, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setLoading(true);

      await client.create({
        _type: 'userOpinion',
        name: data.Name,
        email: data.email,
        avis: data.avis,
        
      });

      toast({
        title: "Avis envoyé!",
        description: "Merci pour votre avis. Il sera publié après validation.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      reset(); // clear the form
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      console.error("Sanity error", err);
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const data = await client.fetch(`*[_type == "publicOpinion"]{
          name,
          avis
        }`);
        setSlidesData(data);
      } catch (error) {
        console.error("Erreur de chargement des avis :", error);
      }
    };

    fetchOpinions();
  }, []);

  return (
    <div>
      {/* SecondHeader */}
      <SecondHeader
        subtitle="DECOUVRER PLUS D'INFORMATIONS"
        title="A Propos De Nous"
        imageUrl={aproposimg}
        height="296px"
        textsize="16px"
      />

      {/* A propos de notre entreprise */}
      <Center mt="50px">
        <Heading color="black" >
        <span className="text-[#004F87]">A propos de notre  </span>
        <span className="text-[#00AEEB]">entreprise</span>
        </Heading>
      </Center>

      {/* Card */}
      <Center mt="50px">
        <Card
          direction={{ base: 'column', xl: 'row' }}
          overflow="hidden"
          variant="outline"
          gap="10px"
          className="max-w-7xl"
        >
          <Image
            className="rounded-md object-fill w-full sm:w-[591px] sm:h-[403px]"
            src={entreprise}
          />
          <Stack>
          <CardBody>
          <Text py="4" className="w-full sm:w-[594px] sm:h-[144px] text-lg" fontFamily="Montserrat">
            {ABOUT_TEXT}
          </Text>
          <SimpleGrid mt="80px" columns={{ base: 1, sm: 3 }} spacing={10} justifyContent="center" justifyItems="center">
            <Box className="shadow-xl w-[185px] h-[85px] rounded-lg bg-slate-700 flex flex-col items-center justify-center">
              <Text className="text-4xl text-white font-bold">+ 150</Text>
              <Text className="text-base text-white text-1xl font-bold">clients</Text>
            </Box>
            <Box className="shadow-xl w-[185px] h-[85px] rounded-lg bg-slate-700 flex flex-col items-center justify-center">
              <Text className="text-4xl text-white font-bold">+ 30 km</Text>
              <Text className="text-base text-white text-1xl font-bold">de gaines fabriquées</Text>
            </Box>
            <Box className="shadow-xl w-[185px] h-[85px] rounded-lg bg-slate-700 flex flex-col items-center justify-center">
              <Text className="text-4xl text-white font-bold">+ 19</Text>
              <Text className=" text-white text-1xl font-bold">gouvernorats livrés</Text>
            </Box>
          </SimpleGrid>
        </CardBody>

          </Stack>
        </Card>
      </Center>

{/* Rencontrer notre fondateur */}
<Box className="bg-[#5A7CA929] mt-24 p-8">
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
    {/* Image */}
    <Box className="flex justify-center">
      <Image
        className="rounded-md object-fill w-80 h-80 sm:w-96 sm:h-96"
        src={Fondateur2}
        alt="Fondateur"
      />
    </Box>

    {/* Text */}
    <Box>
      <Heading as="h1" fontSize="2xl" fontWeight="bold" fontFamily="Montserrat">
        <span className="text-[#004F87]">Rencontrer notre </span>
        <span className="text-[#00AEEB]">fondateur</span>
      </Heading>
      <Text color="#1E1E1E" mt={5} fontSize="lg" fontFamily="Montserrat">
        {Fondateur_Presentation}
      </Text>

      {/* Social Media Links */}
      <Flex mt={5} gap={8} justifyContent="left">
        <Link href="https://www.facebook.com/sdairtn/?locale=fr_FR" isExternal>
          <IconButton
            icon={<FaFacebook />}
            aria-label="Facebook Profile"
            fontSize="40px"
            colorScheme="facebook"
            color="#004F87"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ben-lassoued-riadh-830ba3123/" isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn Profile"
            fontSize="40px"
            colorScheme="linkedin"
            color="#004F87"
          />
        </Link>
      </Flex>
    </Box>
  </SimpleGrid>
</Box>

{/* Client Testimonials */}
<Center mt="100px">
        <Heading color="black" >
        <span className="text-[#004F87]">Opinions de   </span>
        <span className="text-[#00AEEB]">nos clients</span>
        </Heading>
      </Center>
<Center mt={20}>
{slidesData.length > 0 ? (
    <SlideSwiper slides={slidesData} showMultiple={true} />
  ) : (
    <Text>Chargement des avis...</Text>
  )}
</Center>

{/* Form Section */}
<Center mt={32}>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full sm:w-[600px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <Input
          backgroundColor="#F4F4F4"
          h="51px"
          w="full"
          mr="4px"
          {...register("Name")}
          borderRadius="10px"
          placeholder="Nom De L'Entreprise"
          color="black"
          required
        />
      </div>
      <div>
        <Input
          backgroundColor="#F4F4F4"
          h="51px"
          w="full"
          borderRadius="10px"
          {...register("email")}
          placeholder="Email"
          color="black"
          type="email"
          required
        />
      </div>
    </div>
    <div>
      <Textarea
        h="51px"
        w="full"
        backgroundColor="#F4F4F4"
        borderRadius="10px"
        {...register("avis")}
        placeholder="Insérer Votre Avis"
        color="black"
        required
        resize="none"
      />
    </div>
    <Button
      type="submit"
      borderRadius="10px"
      backgroundColor="#5A7CA9"
      w="full"
      h="51px"
      color="white"
      fontSize="lg"
      _hover={{
        color: "#5A7CA9", 
        textColor:"white"
      }}
      
    >Envoyer</Button>
  </form>
</Center>
<br />
<br />
<br />

    </div>
  );
};

export default AproposPage;