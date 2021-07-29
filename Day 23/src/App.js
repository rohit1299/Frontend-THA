import "./styles.css";
import { useCallback, useState } from "react";

export default function App() {
  const [isImageChanged, setIsImageChanged] = useToggle();

  return (
    <div onClick={setIsImageChanged} className="image">
      {isImageChanged ? (
        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" />
      ) : (
        <img src="https://www.pngitem.com/pimgs/m/493-4932252_raichu-pokemon-raichu-hd-png-download.png" />
      )}
    </div>
  );
}
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
