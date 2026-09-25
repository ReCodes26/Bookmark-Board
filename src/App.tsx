import { useEffect } from "react";
import type { Bookmark } from "./Data/bookmarkInterface";
import {
  getBookmark,
  createBookmark,
  getAllBookmarks,
  updateBookmark,
} from "./Bookmark/bookmarkFunctions";

function App() {
  useEffect(() => {
    updateBookmark("084783", {
      Title: "Updated bookmark",
      Description: "YatAnother new bookmark",
      URL: "www.example.org",
      Tags: ["Test", "Ok"],
    } as Bookmark);
  }, []);
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
  );
}

export default App;
