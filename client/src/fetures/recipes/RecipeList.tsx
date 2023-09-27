import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import RecipeItem from './RecipeItem';
import './styles/style.scss';
import { recipesSelect } from './recipesSlice';


import { RootState, useAppDispatch } from '../../store';
import RecipeItem from './RecipeItem';
import { clearSearchQuery, setSearchQuery } from './recipesSlice';

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
      <div>
        <h1>Категории</h1>
        <div className="search1">
          {/* <div className="search"> */}
          <input
            className="search"
            type="text"
            onChange={handleSearch}
            value={inputServices}
            placeholder="искать на сайте"
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
