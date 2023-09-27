import React, { useState } from 'react';
import './styles/style.css';
import axios from 'axios';
import './loading.css';
import { useAppDispatch } from '../../store';
import { recipesAdd } from '../recipes/recipesSlice';

function RecipeBot(): JSX.Element {
  const dispatch = useAppDispatch();
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
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
      const formattedRecipe = generatedRecipe.replace(/\n/g, '<br />');
      setRecipe(formattedRecipe);

      // Очищаем инпут после успешного запроса
      setIngredients([]);
    } catch (error) {
      console.error('Ошибка при запросе к API ChatGPT', error);
    } finally {
      setIsLoading(false);
    }
  };
  const finRecipe = recipe.split(' ');
  const title = finRecipe[0];
  const ingridients = finRecipe[1];
  const instruction = finRecipe[2];
  const img =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUh6_W47TOzt3af8i_orr3hd-SuYk5HVsbQDT_OmwFhsttUeG85Ltk6bDytR1xfMxP0Y&usqp=CAU';

  const handleAddToFavorite = (): void => {
    dispatch(recipesAdd({ title, ingridients, instruction, img }));
    setAdded(true);
  };

  return (
    <div>
      {isLoading && (
        <div className="loader">
          {/* Здесь ваш код пайлоудера */}
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
      <div className="generateContainer">
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
        {recipe && (
          // <div>
          //   <h2>Рецепт:</h2>
          //   <div dangerouslySetInnerHTML={{ __html: recipe }} />
          // </div>
          <div>
            <div>{title}</div>
            <img src={img} alt="rere" />
            <div>{ingridients}</div>
            <div>{instruction}</div>
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
