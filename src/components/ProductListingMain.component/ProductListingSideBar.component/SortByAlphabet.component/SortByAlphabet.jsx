import React from "react";

const SortByAlphabet = () => {
  const sortByAlphabet = [" Albhabet: A-Z", " Alphabet: Z-A"];
  return (
    <div>
      {sortByAlphabet.map((item) => (
        <label className="flex-r align-items-center">
          <input className="m-r-s" name="price-sort" type="radio" />
          <span className="text-sm">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default SortByAlphabet;
