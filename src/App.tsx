import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/Mainrouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
};

export default App;
