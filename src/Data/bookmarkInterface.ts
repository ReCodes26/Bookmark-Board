export interface Bookmark {
  ID: string;
  Title: string;
  URL: string;
  Favorite: boolean;
  Description: string | null;
  Tags: string[] | null;
  DateModified: number | null;
}
