import { useEffect } from "react";
import type { Bookmark } from "./Data/bookmarkInterface";
import {
  getBookmark,
  createBookmark,
  getAllBookmarks,
} from "./Bookmark/bookmarkFunctions";

function App() {
  useEffect(() => {
    createBookmark({
      Title: "New Bookmark",
      Description: "Another new bookmark",
      URL: "www.wikipedia.org",
      Tags: ["Wiki", "Education"],
    } as Bookmark);
  }, []);
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
  );
}

export default App;
