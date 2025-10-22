import { Box, Center, Heading } from "@chakra-ui/react";
import HeroSection from "../components/HomeComponent/HeroSection"
import NosProduit from "../components/HomeComponent/NosProduit"
import Process from "../components/HomeComponent/Process"
import SlideSwiper from "../components/contactcomponents/SlideSwiper";
import { AuroraBackground } from "../components/ui/shadcn-io/aurora-background";
import heroImg from "../assets/hero.png";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const LandingPage = () => {
  const slidesData = [
    {
      name: 'M. Othmen MAHOUACHI',
      title: 'Directeur OM Froid',
      avis: 'J’ai commandé le produit “Gaines textile”. Il est bien meilleur que les autres modèles que j’ai pu essayer. La livraison a été très rapide. Je le recommande vivement ! Le produit est conforme à la description et de bonne qualité. Je suis trés satisfait de mon achat, qui présente un excellent rapport qualité prix. L’article est arrivé en parfait était. Je n’hésiterai pas à acheter à nouveau chez S.D-AIR'
    },
    {
      name: 'Hugo Nienow',
      title: 'District Security Agent',
      avis: 'Excellent service et produits de qualité. Très satisfait de mon achat.'
    },
    {
      name: 'Sophie Martin',
      title: 'Responsable Technique',
      avis: 'Produits confvement SDair pour leur professionnaly rtyy dyhdftyhfty rdty dtyh dyhtyh dyh tyh tyhyh y  tyutyutyty rty dtydrt tyt ty tyrtty yhtyty tyyrty(ytt r(  (y thghgu yhgh ghyiyftghg uyt yuty.'
    },
    {
      name: 'Ahmed Ben Ali',
      title: 'Ingénieur HVAC',
      avis: 'Les gaines textiles sont de très bonne qualité. Installation facile et résultat impeccable. Excellent rapport qualité-prix.'
    },
    {
      name: 'Marie Dubois',
      title: 'Chef de Projet',
      avis: 'Service impeccable, produits conformes aux normes. Équipe professionnelle et à l\'écoute. Je recommande sans hésitation.'
    },
    {
      name: 'Karim Trabelsi',
      title: 'Directeur Technique',
      avis: 'Collaboration excellente avec SDair. Produits innovants et service après-vente réactif. Très satisfait de notre partenariat.'
    },
  ];
  return (
    <>
      {/* HERO background section (non-fixed, scrolls with page) */}
      <Box
        h="1100px"
        zIndex={0}
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(255,255,255,1)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Global Aurora background and page content, pulled over hero bg */}
      <AuroraBackground>
        <Box mt="-1100px">
          <HeroSection />
          <div >
            <Process />
          </div>
          <NosProduit />
          <Center>
           <Heading
                   as="h1"
                   size={{ base: "2xl", md: "3xl" }}
                   color="#004F87"
                   fontWeight="bold"
                   mb={{ base: 12, md: 16 }}
                   textAlign="center"
                   animation={`${float} 2s ease-in-out infinite`}
                 >
                   Opinions des clients
                 </Heading>
          </Center>
          <Center mt={100} px={4}> {/* Ajout de padding horizontal */}
            <Box w="full" maxW="1400px"> {/* Container avec largeur max */}
              <SlideSwiper slides={slidesData} showMultiple={true} />
            </Box>
          </Center>
        </Box>
        <br />
        <br />
      </AuroraBackground>
    </>
  )
}

export default LandingPage