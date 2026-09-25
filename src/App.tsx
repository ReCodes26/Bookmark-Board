import { useEffect } from "react";
import { getAllBookmarks } from "./Bookmark/BookmarkFunctions";

function App() {
  useEffect(() => {
    console.log(getAllBookmarks());
  }, []);
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
  );
}

export default App;
