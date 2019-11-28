import React, { ReactElement, memo, FunctionComponent } from 'react';
import { IMovie } from '../../types/IMovies';

interface IProps {
  movie: IMovie;
}

const Movie: FunctionComponent<IProps> = ({ movie }): ReactElement => {
  return (
    <li className="list-group-item">
      <p>
        {movie.Title} - {movie.Year}
      </p>
      <img className="thumbnail" alt="poster" src={movie.Poster} />
    </li>
  );
};
export default memo(Movie);
