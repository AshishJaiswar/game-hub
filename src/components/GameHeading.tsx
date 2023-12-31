import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../pages/home";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return <Heading marginBottom={4}>{heading}</Heading>;
}

export default GameHeading;
