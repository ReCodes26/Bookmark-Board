import type { Bookmark } from "../Data/bookmarkInterface";
export function createBookmark() {}
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
