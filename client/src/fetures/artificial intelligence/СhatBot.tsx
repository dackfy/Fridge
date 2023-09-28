import React, { useState } from 'react';
import './styles/style.css';
import axios from 'axios';
import './loading.css';
import { useAppDispatch } from '../../store';
import { recipesAdd } from '../recipes/recipesSlice';

function RecipeBot(): JSX.Element {
  const dispatch = useAppDispatch();
  const [ingredients, setIngredients] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleIngredientChange = (e: any): void => {
    setIngredients(e.target.value.split(' '));
  };

  const generateRecipe = async (): Promise<void> => {
    setAdded(false);
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful recipe bot.' },
            {
              role: 'user',
              content:
                'ru: Предложи рецепт с использованием ' +
                ingredients.join(', '),
            },
          ],
        },
        {
          headers: {
            Authorization:
              'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedRecipe = response.data.choices[0].message.content;
      const formattedRecipeSteps = generatedRecipe.split('\n');
      setRecipeSteps(formattedRecipeSteps);

      // Очищаем инпут после успешного запроса
      setIngredients([]);
    } catch (error) {
      console.error('Ошибка при запросе к API ChatGPT', error);
    } finally {
      setIsLoading(false);
    }
  };

  const title = recipeSteps[0];
  const ingridients = recipeSteps[1];
  const instruction = recipeSteps[2];
  const img =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUh6_W47TOzt3af8i_orr3hd-SuYk5HVsbQDT_OmwFhsttUeG85Ltk6bDytR1xfMxP0Y&usqp=CAU';

  const handleAddToFavorite = (): void => {
    dispatch(recipesAdd({ title, ingridients, instruction, img }));
    console.log({ title, ingridients, instruction, img },'---------------');
    
    setAdded(true);
  };

  return (
    <div className="generateContainer">
      {isLoading && (
        <div className="loader">
          <div className="tall-stack">
            <div className="butter falling-element"> </div>
            <div className="pancake falling-element"> </div>
            <div className="pancake falling-element"> </div>
            <div className="pancake falling-element"> </div>
            <div className="pancake falling-element"> </div>
            <div className="pancake falling-element"> </div>
            <div className="pancake falling-element"> </div>
            <div className="plate">
              <div className="plate-bottom"> </div>
              <div className="shadow"> </div>
            </div>
          </div>
        </div>
      )}
      <div className="generateInputContainer">
        <h1>Генератор рецептов</h1>
        <p>Введите продукты, которые есть у вас:</p>
        <input
          type="text"
          value={ingredients.join(' ')}
          onChange={handleIngredientChange}
        />
        <button
          type="button"
          onClick={generateRecipe}
          className="generate-recipe-btn"
        >
          Сгенерировать рецепт
        </button>

        {recipeSteps.length > 0 && (
          <div>
            <div><h3>{title}</h3></div>
            <img src={img} alt="recipe" />
            <div>
              {recipeSteps.slice(2).map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
            {!added ? (
              <button type="button" onClick={handleAddToFavorite}>
                В избранное
              </button>
            ) : (
              <button type="button">Добавлено</button>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeBot;