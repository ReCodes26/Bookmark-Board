import type { Bookmark } from "../Data/bookmarkInterface";

export function createBookmark(Data: Bookmark) {
  const BookmarkData: Bookmark = {
    ...Data,
    ID: crypto.randomUUID(),
    DateModified: Date.now(),
    Favorite: false,
  };

  // Add data to LocalStorage
  const bookmarksArray = getAllBookmarks();
  bookmarksArray.push(BookmarkData);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray));
}
export function getBookmark(ID: string): Bookmark | null {
  const bookmarks = getAllBookmarks();
  if (bookmarks) {
    const bookmark = bookmarks.find((bookmark) => bookmark.ID === ID);
    if (bookmark) {
      return bookmark;
    }
  }

  return null;
}
export function getAllBookmarks(): Array<Bookmark> {
  const bookmarksString = localStorage.getItem("bookmarks");
  if (bookmarksString) {
    // Parse JSON
    const data: Array<Bookmark> = JSON.parse(bookmarksString);

    return data;
  }
  return new Array<Bookmark>();
}
export function updateBookmark() {}
export function deleteBookmark() {}
export function favoriteBookmark() {}
