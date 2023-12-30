import { Input } from "@chakra-ui/react";

function SearchInput() {
  return (
    <Input
      borderRadius={20}
      variant="filled"
      placeholder="Search games..."
      marginX={{ sm: 4, md: 10, lg: 20 }}
    />
  );
}

export default SearchInput;
