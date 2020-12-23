import { Provider } from "react-redux";
import "./App.css";
import BookContainer from "./components/BookContainer";
import HooksBookContainer from "./components/HooksBookContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HooksBookContainer />
      </div>
    </Provider>
  );
}

export default App;
