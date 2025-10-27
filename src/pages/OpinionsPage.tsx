import { Box, Container } from "@chakra-ui/react";
import SecondHeader from "../components/navbar/SecondHeader";
import { AuroraBackground } from "../components/ui/shadcn-io/aurora-background";
import OpinionsDisplay from "../components/contactcomponents/OpinionsDisplay";
import OpinionForm from "../components/contactcomponents/OpinionForm";
import heroImg from "../assets/hero.png";

const OpinionsPage = () => {
  return (
    <AuroraBackground>
      <Box>
        {/* Header Section */}
        <SecondHeader
          title="Avis Clients"
          subtitle="VOTRE SATISFACTION EST NOTRE PRIORITÉ"
          imageUrl={heroImg}
          height="296px"
          textsize="16px"
        />

        {/* Opinions Display Section */}
        <Container maxW="container.xl" py={10}>
          <OpinionsDisplay />
        </Container>

        {/* Opinion Form Section */}
        <Container maxW="container.md" py={10}>
          <OpinionForm />
        </Container>

        <Box pb={10} />
      </Box>
    </AuroraBackground>
  );
};

export default OpinionsPage;
