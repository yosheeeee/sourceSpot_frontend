import { SearchRounded } from "@mui/icons-material";

export default function SearchBlock() {
  return (
    <div className="search-container flex items-center py-2 px-5 border-2 border-gray-500 rounded-md">
      <input type="text" className="outline-none" placeholder="Search..." />
      <SearchRounded />
    </div>
  );
}
