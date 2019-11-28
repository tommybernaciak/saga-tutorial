import React, { ReactElement, useCallback, memo } from 'react';
import { useMappedState } from 'redux-react-hook';
import Search from '../search/Search';
import { IStore } from '../../types/IStore';
import { IMovie } from '../../types/IMovies';
import { Movie } from '.';

const Movies = (): ReactElement => {
  const mapState = useCallback(
    (state: IStore) => ({
      data: state.movies.data,
      errorMessage: state.movies.errorMessage
    }),
    []
  );
  const {
    data,
    errorMessage
  }: {
    data: IMovie[];
    errorMessage: string | undefined;
  } = useMappedState(mapState);

  return (
    <div className="album py-5 bg-light">
      <h1>Movies</h1>
      <div className="container">
        <Search />
      </div>
      {errorMessage || data === undefined ? (
        <div className="alert alert-danger">{errorMessage || 'something went wrong'}</div>
      ) : (
        <div className="container pull-down">
          {data.map((movie: IMovie, i: number) => (
            <Movie movie={movie} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};
export default memo(Movies);
