import { Container, Flex } from "@chakra-ui/react";

function App() {
  // => 10
  return (
    <Container>
      <Flex my={"4"} justifyContent={"center"} alignItems={"center"}>
        <iframe
          src="https://www.stack.so/leaderboard/thecreative/embed"
          width="100%"
          height="900px"
          allow="clipboard-write"
        ></iframe>
      </Flex>
    </Container>
  );
}

export default App;
