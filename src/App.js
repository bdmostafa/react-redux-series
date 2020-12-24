import { Provider } from "react-redux";
import "./App.css";
import BookContainer from "./components/BookContainer";
import HooksBookContainer from "./components/HooksBookContainer";
import ItemContainer from "./components/ItemContainer";
import NewBookContainer from "./components/NewBookContainer";
import PenContainer from "./components/PenContainer";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HooksBookContainer />
        <PenContainer />
        <NewBookContainer />
        <ItemContainer book />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
