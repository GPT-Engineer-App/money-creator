import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white">
      <Flex align="center">
        <Heading as="h1" size="lg">
          <Link to="/">Crypto Creator</Link>
        </Heading>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" color="white">
          Home
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;