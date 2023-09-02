import { Box, Container, Progress, Text } from "@chakra-ui/react";

export default function SkillsSection() {
  return (
    <Container maxW="1400px" as={"section"} id="Skills">
      <h1 className="main-title">Skills</h1>
      <Box padding={"20px"} border={"1px solid #3182ce "} borderRadius={"25px"}>
        <Box  mt={"15px"}>
          <Text as={"span"} >React</Text>
          <Progress borderRadius={"25px"} value={85}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text as={"span"} >Node</Text>
          <Progress borderRadius={"25px"} value={80}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text as={"span"} >Mongo DB</Text>
          <Progress borderRadius={"25px"} value={80}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text  as={"span"} >JavaScript</Text>
          <Progress borderRadius={"25px"} value={95}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text  as={"span"} >Chakra UI</Text>
          <Progress borderRadius={"25px"} value={90}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text  as={"span"} >Sass</Text>
          <Progress borderRadius={"25px"} value={60}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text as={"span"}>React-Bootstrap</Text>
          <Progress borderRadius={"25px"} value={80}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text  as={"span"} >Python</Text>
          <Progress borderRadius={"25px"} value={50}></Progress>
        </Box>
        <Box mt={"15px"}>
          <Text  as={"span"} >C++</Text>
          <Progress borderRadius={"25px"} value={50}></Progress>
        </Box>
      </Box>
    </Container>
  );
}
