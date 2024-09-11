import React from 'react';
import '../styles/recipe.css';

const RecipeCard = ({ recipe }) => {
    const { name, nutrients, description, ingredients, steps, image } = recipe;

    const parsedIngredients = Array.isArray(ingredients) ? ingredients : JSON.parse(ingredients || '[]');
    const parsedSteps = Array.isArray(steps) ? steps : JSON.parse(steps || '[]');
    const parsedNutrients = typeof nutrients === 'object' ? nutrients : JSON.parse(nutrients || '{}');

  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p className="recipe-description">{recipe.description}</p>

      <div className="recipe-section">
        <h4>Ingredients:</h4>
        <ul className="recipe-ingredients">
          {parsedIngredients.length > 0 ? (
            parsedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available</li>
          )}
        </ul>
      </div>

      <div className="recipe-section">
        <h4>Steps:</h4>
        <ol className="recipe-steps">
          {parsedSteps.length > 0 ? (
            parsedSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))
          ) : (
            <li>No steps available</li>
          )}
        </ol>
      </div>

      <div className="recipe-section">
        <h4>Nutrition Facts:</h4>
        {Object.keys(parsedNutrients).length > 0 ? (
          <ul className="recipe-nutrients">
            {Object.entries(parsedNutrients).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No nutrition facts available</p>
        )}
      </div>

      {recipe.url && (
        <a href={recipe.url} className="recipe-url" target="_blank" rel="noopener noreferrer">
          View Full Recipe
        </a>
      )}
    
    </div>
  );
};

export default RecipeCard;
