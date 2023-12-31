import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function Navbar({ onSearch }: Props) {
  return (
    <Flex padding="10px" justifyContent="space-between" alignItems="center">
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </Flex>
  );
}

export default Navbar;
