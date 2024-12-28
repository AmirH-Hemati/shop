function Search({ setSearch, search }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full lg:w-1/3 bg-[#f4f4f4] text-gray-600 rounded-2xl px-6 py-3 "
      placeholder="Search Coffee ..."
    />
  );
}

export default Search;
