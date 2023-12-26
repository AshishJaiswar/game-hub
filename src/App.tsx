import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import Layout from "./Layout.tsx";

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
