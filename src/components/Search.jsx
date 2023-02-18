import { useState } from 'react';

export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKey = evt => {
    if (evt.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={evt => setValue(evt.target.value)}
          value={value}
        />
        <button className="btn search__btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};
