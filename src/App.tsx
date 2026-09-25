import { useEffect } from "react";
import { getBookmark } from "./Bookmark/bookmarkFunctions";

function App() {
  useEffect(() => {
    console.log(getBookmark("213321"));
  }, []);
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
  );
}

export default App;
