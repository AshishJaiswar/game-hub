import { Grid, GridItem, Show } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

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
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">{children}</GridItem>
    </Grid>
  );
}

export default Layout;
