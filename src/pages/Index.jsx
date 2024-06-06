import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Box, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [cryptoName, setCryptoName] = useState("");
  const [cryptoSymbol, setCryptoSymbol] = useState("");
  const [initialSupply, setInitialSupply] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a backend server
    toast({
      title: "Cryptocurrency Created",
      description: `Name: ${cryptoName}, Symbol: ${cryptoSymbol}, Initial Supply: ${initialSupply}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mt={8}>
          Create Your Own Cryptocurrency
        </Heading>
        <Box as="form" onSubmit={handleSubmit} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
          <FormControl id="cryptoName" isRequired>
            <FormLabel>Cryptocurrency Name</FormLabel>
            <Input
              type="text"
              value={cryptoName}
              onChange={(e) => setCryptoName(e.target.value)}
              placeholder="Enter the name of your cryptocurrency"
            />
          </FormControl>
          <FormControl id="cryptoSymbol" isRequired mt={4}>
            <FormLabel>Symbol</FormLabel>
            <Input
              type="text"
              value={cryptoSymbol}
              onChange={(e) => setCryptoSymbol(e.target.value)}
              placeholder="Enter the symbol of your cryptocurrency"
            />
          </FormControl>
          <FormControl id="initialSupply" isRequired mt={4}>
            <FormLabel>Initial Supply</FormLabel>
            <Input
              type="number"
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value)}
              placeholder="Enter the initial supply"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={8} width="full">
            Create Cryptocurrency
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;