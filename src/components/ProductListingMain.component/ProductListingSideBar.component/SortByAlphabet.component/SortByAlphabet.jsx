import React from "react";

const SortByAlphabet = () => {
  const sortByAlphabet = [" Albhabet: A-Z", " Alphabet: Z-A"];
  return (
    <div>
      {sortByAlphabet.map((item) => (
        <label class="flex-r align-items-center">
          <input class="m-r-s" name="price-sort" type="radio" />
          <span class="text-sm">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default SortByAlphabet;
