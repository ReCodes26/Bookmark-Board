import type { Bookmark } from "../Data/bookmarkInterface";
export function createBookmark() {}
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
export function getAllBookmarks(): Bookmark[] | null {
  const bookmarksString = localStorage.getItem("bookmarks");
  if (bookmarksString) {
    // Parse JSON
    const data: Bookmark[] = JSON.parse(bookmarksString);

    return data;
  }
  return null;
}
export function updateBookmark() {}
export function deleteBookmark() {}
export function favoriteBookmark() {}
