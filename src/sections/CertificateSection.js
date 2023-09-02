import {  Container, Image, Link } from "@chakra-ui/react";
import certificate from "../images/hackerrank.png"

export default function CertificateSection() {
  return (
    <Container maxW="1400px" as={"section"} id="Certifacates">
      <h1 className="main-title">Certificates</h1>
      <Link href="https://www.hackerrank.com/certificates/4b5561204327" target="_blank">
        <Image
          src={certificate}
          maxW={{ base: "350px", sm: "400px", md: "650px", lg: "800" }}
          margin={"auto"}
        ></Image>
      </Link>
    </Container>
  );
}
