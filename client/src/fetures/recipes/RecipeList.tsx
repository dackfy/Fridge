import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './styles/style.scss';

import './styles/style.scss';

import { RootState, useAppDispatch } from '../../store';
import { clearSearchQuery, setSearchQuery } from './recipesSlice';

import Carousel from 'react-bootstrap/Carousel';
import RecipeItem from './RecipeItem'; // Замените на ваш компонент RecipeItem

import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируйте стили Bootstrap

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

  // Разделите массив рецептов на первые 5 и остальные
  const recipesInCarousel = recipes.slice(0, 5);
  const recipesInList = recipes.slice(5);

  return (
    <>
      <div>
        <h1>Категории</h1>
        <div className="search1">
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
        <div>
          <div className="recipes__container">
            {recipesInList.map((recipe) => (
              <RecipeItem recipe={recipe} key={recipe.id} />
            ))}
          </div>
          ;
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
