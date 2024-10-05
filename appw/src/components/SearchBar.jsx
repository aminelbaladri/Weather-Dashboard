import React from 'react';

const SearchBar = ({ location, setLocation, handleSearch }) => {
  return (
    <div className="text-center mb-6">
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleSearch}
        className="py-4 px-8 w-full text-2xl rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 shadow-lg focus:outline-none transition-all duration-300"
        placeholder="Enter a location"
      />
    </div>
  );
};

export default SearchBar;
