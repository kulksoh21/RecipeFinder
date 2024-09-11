import React, { useEffect, useState } from 'react';
import { getRecipes } from '../api.js';
import RecipeCard from '../components/recipe-card';
import '../styles/recipe.css';


const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const data = await getRecipes();
      setRecipes(data);
    } catch (error) {
      setError('Failed to load recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  {loading && <LoadingIndicator />};
  if (error) return <p>{error}</p>;

  return (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;