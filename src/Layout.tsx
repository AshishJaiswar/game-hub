import { Grid, GridItem, Show } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">{children}</GridItem>
    </Grid>
  );
}

export default Layout;
