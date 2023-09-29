import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from './types/Recipestypes';

export default function RecipeItem({
  recipe,
}: {
  recipe: Recipe;
}): JSX.Element {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow recipeItem">
        <Link to={`/recipes/${recipe.id}`}>
          <a href="#">
            <img className="rounded-t-lg" src={recipe.img} alt="food's img" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
                {recipe.title}
              </h5>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-black dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-black-800"
            >
              Подробнее
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Link>
      </div>
    </>
  );
}
