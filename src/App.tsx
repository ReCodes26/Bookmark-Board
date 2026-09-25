import { useEffect } from "react";
import type { Bookmark } from "./Data/bookmarkInterface";
import {
  getBookmark,
  createBookmark,
  getAllBookmarks,
  updateBookmark,
  deleteBookmark,
  favoriteBookmark,
} from "./Bookmark/bookmarkFunctions";

function App() {
  useEffect(() => {
    favoriteBookmark("084783", true);
  }, []);
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
  );
}

export default App;
