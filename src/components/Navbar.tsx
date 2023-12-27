import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="50px" />
        <Text fontSize="lg" fontWeight="bold">
          GAMEHUB
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
