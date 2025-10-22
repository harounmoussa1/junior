import { Box, Center, Flex } from "@chakra-ui/react";
import ContactModal from "../components/contactcomponents/ContactModal";
import GetInTouch from "../components/contactcomponents/GetInTouch";
import SecondHeader from "../components/navbar/SecondHeader";
import { AuroraBackground } from "../components/ui/shadcn-io/aurora-background";
import heroImg from "../assets/hero.png"

const ContactPage = () => {
  return (
    <AuroraBackground>
      <Box>
      {/* Header Section */}
      <SecondHeader
          title="Contactez-Nous"
          subtitle="RESTONS EN CONTACT"
          imageUrl={heroImg}
          height="296px"
          textsize="16px"
        />

      {/* Contact Section */}
      <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
      <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
          {/* ContactModal */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <ContactModal />
          </div>

          {/* GetInTouch */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <GetInTouch />
          </div>
        </div>
        </Flex>
        </Box>

      {/* Google Maps Section */}
      <Center className="w-full mt-14 px-4 lg:px-0">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3242.8141468714416!2d10.745014!3d35.632308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2stn!4v1743670111898!5m2!1sfr!2stn"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </Center>
      <br /><br />
      </Box>
    </AuroraBackground>
  );
};

export default ContactPage;
