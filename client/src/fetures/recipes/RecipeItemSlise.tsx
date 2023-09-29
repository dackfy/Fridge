import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from './types/Recipestypes';
import './styles/slaid.css';

export default function RecipeItem({
  recipe,
}: {
  recipe: Recipe;
}): JSX.Element {
  return (
    <div className="ItemContainer">
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.img} alt="картинка" />
      </Link>
    </div>
  );
}
