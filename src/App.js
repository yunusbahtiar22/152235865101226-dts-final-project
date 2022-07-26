import { Provider } from "react-redux";
import { store } from "./app/store";
import Routes from "./routes/Routers";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
