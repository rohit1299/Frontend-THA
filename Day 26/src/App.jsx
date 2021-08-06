import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./actions/index";

export default function App() {
  const myState = useSelector((state) => state.name);
  const myStateEmail = useSelector((state) => state.email);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            dispatch(updateName(e.target.value));
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => {
            dispatch(updateEmail(e.target.value));
          }}
        />
      </div>
      <div className="output">
        <div>
          Name : <span>{myState}</span>
        </div>
        <hr />
        <div>
          Email : <span>{myStateEmail}</span>
        </div>
        <hr />
      </div>
    </div>
  );
}
