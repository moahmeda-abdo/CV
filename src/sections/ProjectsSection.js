import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import portfolio from "../images/portfolio-paper-poster-with-colorful-brush-strokes-vector-21849131.jpg";

export default function ProjectsSection() {
  return (
    <Container maxW="1400px" as={"section"} id="Education">
      <h1 className="main-title">Projects</h1>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={50}
        flexWrap={"wrap"}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src={portfolio}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">My Portofolio</Heading>
              <Text>
                This is my Portofolio, I bulit it to show the projects I worked
                on my skills, qualifications and my social media links. I hope
                you like it .
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                View Code
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </Container>
  );
}
