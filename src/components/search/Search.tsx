import React, { ReactElement, memo, useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { search } from '../../actions/movies';

const Search = (): ReactElement => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(search(searchTerm));
  };

  return (
    <div className="search-form">
      <h2 className="text-center">search for a movie</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="searchQuery"
            className="form-control"
            placeholder="search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">search</button>
      </form>
    </div>
  );
};
export default memo(Search);
