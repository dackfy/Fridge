import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RecipeItemSlise from './RecipeItemSlise';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import './styles/slaid.css';

export default function ReciptSlaid(): JSX.Element {
  const recipes = useSelector((store: RootState) => store.recipes.recipes);

  const firstFiveRecipes = recipes.slice(0, 5);

  return (
    <div>
      <div className="title">
        <h1>Рецепты дня!</h1>
      </div>
      <Carousel data-bs-theme="dark">
        {firstFiveRecipes.map((recipe) => (
          <Carousel.Item key={recipe.id}>
            <div className="receptContainerSlaid">
              <RecipeItemSlise recipe={recipe} />
            </div>

            <Carousel.Caption>
              <h3>{recipe.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
