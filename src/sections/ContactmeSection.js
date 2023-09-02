import { Box, Container, Link } from "@chakra-ui/react";

export default function ContactmeSection() {
  return (
    <Container maxW="1400px" as={"section"} id="Contactme">
      <h1 className="main-title">Contact Me</h1>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Link href="mailto:mohamedabdoelatar@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope  icon"></i>
        </Link>

        <Link
          marginLeft={"30px"}
          href="https://github.com/moahmeda-abdo"
          target="_blank"
        >
          <i class="fa-brands fa-github  icon"></i>
        </Link>

        <Link
          marginLeft={"30px"}
          href="https://wa.me/+201200396069"
          target="_blank"
        >
          <i class="fa-brands fa-whatsapp  icon"></i>
        </Link>

        <Link
          marginLeft={"30px"}
          href="https://www.linkedin.com/in/mohamed-abdel-fatah-b6336421a"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin  icon"></i>
        </Link>
      </Box>
    </Container>
  );
}
