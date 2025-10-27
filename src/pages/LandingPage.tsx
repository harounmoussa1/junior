import { Box } from "@chakra-ui/react";
import HeroSection from "../components/HomeComponent/HeroSection"
import NosProduit from "../components/HomeComponent/NosProduit"
import Process from "../components/HomeComponent/Process"
import OpinionsSection from "../components/HomeComponent/OpinionsSection";
import { AuroraBackground } from "../components/ui/shadcn-io/aurora-background";
import heroImg from "../assets/hero.png";

const LandingPage = () => {
  
  return (
    <>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L8Z6KSP4X3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L8Z6KSP4X3');
</script>
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
          <OpinionsSection />
        </Box>
        <br />
        <br />
      </AuroraBackground>
    </>
  )
}

export default LandingPage
