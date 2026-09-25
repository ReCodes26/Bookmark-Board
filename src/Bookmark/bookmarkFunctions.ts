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
export function updateBookmark(ID: string, Data: Bookmark) {
  const index = getBookmarkIndexByID(ID);

  if (index != -1) {
    let updatedBookmarks: Bookmark[] = getAllBookmarks();
    const oldBookmark: Bookmark = updatedBookmarks[index];
    updatedBookmarks[index] = {
      ...oldBookmark,
      ...Data,
      DateModified: Date.now(),
    };
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    return;
  }
}
export function deleteBookmark(ID: string) {
  const bookmarkIndex = getBookmarkIndexByID(ID);
  if (bookmarkIndex != -1) {
    let updatedBookmarks: Bookmark[] = getAllBookmarks();
    updatedBookmarks.splice(bookmarkIndex, 1);
    // Replace with new data
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    return;
  }
}
export function favoriteBookmark(ID: string, Value: boolean) {
  updateBookmark(ID, { Favorite: Value } as Bookmark);
}

function getBookmarkIndexByID(ID: string): number {
  return getAllBookmarks().findIndex((bookmark) => bookmark.ID === ID);
}
