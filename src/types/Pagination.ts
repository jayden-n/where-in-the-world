export interface PaginationTS {
  limit: number;
  total: number;
  offset: number;
  setOffset: (e: number) => void;
}
