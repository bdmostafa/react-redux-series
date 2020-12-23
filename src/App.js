import { Provider } from "react-redux";
import "./App.css";
import BookContainer from "./components/BookContainer";
import HooksBookContainer from "./components/HooksBookContainer";
import PenContainer from "./components/PenContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HooksBookContainer />
        <PenContainer />
      </div>
    </Provider>
  );
}

export default App;
