import React from 'react';

const SearchBar = ({ input, onChange }) => {
  return (
    <div className="search-bar w-full max-w-xl">
      <label htmlFor="query" className="label sr-only">
        Food Name
      </label>
      <input
        type="search"
        name="query"
        className="input text-2xl px-4 py-2 outline-none rounded-lg border border-gray-500 w-full"
        placeholder="Search..."
        autoComplete="off"
        value={input}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
