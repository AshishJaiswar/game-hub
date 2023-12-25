import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import Layout from "./Layout.tsx";
import GameGrid from "./components/GameGrid.tsx";

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
        <GameGrid />
      </Layout>
    </>
  );
}

export default App;
