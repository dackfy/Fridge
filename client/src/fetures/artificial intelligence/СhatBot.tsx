import React, { useState } from 'react';
import axios from 'axios';
import './loading.css';

function RecipeBot() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleIngredientChange = (e: any) => {
    setIngredients(e.target.value.split(' '));
  };

  const generateRecipe = async () => {
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
      setRecipe(generatedRecipe);
    } catch (error) {
      console.error('Ошибка при запросе к API ChatGPT', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Генератор рецептов</h1>
      <p>Введите продукты, которые есть у вас:</p>
      <input type="text" onChange={handleIngredientChange} />
      <button onClick={generateRecipe}>Сгенерировать рецепт</button>
      {isLoading ? (
        <div className="loader">
          {/* Здесь ваш код пайлоудера */}
          <div className="tall-stack">
            <div className="butter falling-element"></div>
            <div className="pancake falling-element"></div>
            <div className="pancake falling-element"></div>
            <div className="pancake falling-element"></div>
            <div className="pancake falling-element"></div>
            <div className="pancake falling-element"></div>
            <div className="pancake falling-element"></div>
            <div className="plate">
              <div className="plate-bottom"></div>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      ) : recipe ? (
        <div> {recipe}</div>
      ) : null}
    </div>
    //
    // <div>
    //   <h1>Генератор рецептов</h1>
    //   <p>Введите продукты, которые есть у вас:</p>
    //   <input type="text" onChange={handleIngredientChange} />
    //   <button onClick={generateRecipe}>Сгенерировать рецепт</button>
    //   {recipe && <div> {recipe}</div>}
    //   <div className="loader">
    //     <div className="tall-stack">
    //       <div className="butter falling-element"></div>
    //       <div className="pancake falling-element"></div>
    //       <div className="pancake falling-element"></div>
    //       <div className="pancake falling-element"></div>
    //       <div className="pancake falling-element"></div>
    //       <div className="pancake falling-element"></div>
    //       <div className="pancake falling-element"></div>
    //       <div className="plate">
    //         <div className="plate-bottom"></div>
    //         <div className="shadow"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default RecipeBot;
