import { useEffect } from "react";
import type { Bookmark } from "./Data/bookmarkInterface";
import {
  getBookmark,
  createBookmark,
  getAllBookmarks,
  updateBookmark,
  deleteBookmark,
} from "./Bookmark/bookmarkFunctions";

function App() {
  useEffect(() => {
    deleteBookmark("32423");
  }, []);
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
  );
}

export default App;
