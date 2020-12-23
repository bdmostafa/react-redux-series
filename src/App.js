import { Provider } from "react-redux";
import "./App.css";
import BookContainer from "./components/BookContainer";
import HooksBookContainer from "./components/HooksBookContainer";
import NewBookContainer from "./components/NewBookContainer";
import PenContainer from "./components/PenContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HooksBookContainer />
        <PenContainer />
        <NewBookContainer />
      </div>
    </Provider>
  );
}

export default App;
