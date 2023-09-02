import { Container } from "@chakra-ui/react";
import Navb from "./components/Navb";
import HomePage from "./pages/HomePage";




function App() {
  return (
    <>
      <header  className="sticky">
        <Navb></Navb>
      </header>
      <Container maxW="1370px">
        <main>
          <HomePage></HomePage>

        </main>
      </Container>
    </>
  );
}

export default App;
