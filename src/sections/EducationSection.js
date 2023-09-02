import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import zag from "../images/u.png";

export default function EducationSection() {
  return (
    <Container maxW="1400px" as={"section"} id="Education">
      <h1 className="main-title">Education</h1>
      <Box
        display={"flex"}
        flex-direction={"column"}
        justifyItems={"center"}
        alignItems={"center"}
        flexDir="column"
        mb={"50px"}
      >
        <Image src={zag} maxW={"250px"} mb={"20px"}></Image>
        <Heading as={"h3"}>Zagazig University</Heading>
        <Heading
          fontSize={{ base: "16px", sm: "20px", md: "25px", lg: "30px" }}
        >
          Bachelor's Degree in Computer Science
        </Heading>
        <Text>2022 - present</Text>
      </Box>
    </Container>
  );
}
