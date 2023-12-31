import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement marginLeft={4} children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="Search games..."
          marginX={4}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
