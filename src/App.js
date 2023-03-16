import JobProvider from "./context/jobContext";
import { GlobalStyle } from "./global/style";
import Routers from "./routes/index";

function App() {
  return (
    <div>
      <GlobalStyle />
      <JobProvider>
        <Routers />
      </JobProvider>
    </div>
  );
}

export default App;
