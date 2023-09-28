import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import { RootState, useAppDispatch } from '../../store';
import { clearSearchQuery, setSearchQuery } from './recipesSlice';
import './styles/style.scss';

export default function RecipeList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [poisk, setPoisk] = useState(false);
  const [inputServices, setInputServices] = useState('');
  const recipes = useSelector((store: RootState) => store.recipes.recipes);
  const searchQuery = useSelector(
    (store: RootState) => store.recipes.searchQuery
  );
  useEffect(() => {
    dispatch(clearSearchQuery());
  }, []);
  useEffect(() => {
    setInputServices(searchQuery);
  }, [searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value !== '') {
      setPoisk(true);
    } else {
      setPoisk(false);
    }
    dispatch(setSearchQuery(event.target.value));
  };
  const filteredAll = recipes.filter((recipe) =>
    recipe.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="searchingRecipes">
        <h1>Поиск: </h1>
        <div className="search1">
          <input
            className="search"
            type="text"
            onChange={handleSearch}
            value={inputServices}
            placeholder="Введите название"
          />
        </div>
      </div>
      {!poisk ? (
        <div className="recipes__container">
          {recipes.map((recipe) => (
            <RecipeItem recipe={recipe} key={recipe.id} />
          ))}
        </div>
      ) : (
        <div className="recipes__container">
          {filteredAll.map((recipe) => (
            <RecipeItem recipe={recipe} key={recipe.id} />
          ))}
        </div>
      )}
    </>
  );
}
