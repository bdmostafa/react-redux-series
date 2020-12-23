import { Provider } from "react-redux";
import "./App.css";
import BookContainer from "./components/BookContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
