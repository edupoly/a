import First from "./First";
import Second from "./Second";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 m-2 p-2">
        <h1>App Component</h1>
        <div className="d-flex flex-wrap">
          <First></First>
          <Second></Second>
        </div>
      </div>
    </Provider>
  );
}

export default App;
