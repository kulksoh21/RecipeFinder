import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import RecipeCard from "../components/recipe-card";
import "../styles/home.css";

function Home() {
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  useEffect(() => {
    getRecipes(); // Fetch recipes when the component loads
  }, []);

  // Fetch recipes from the backend
  const getRecipes = () => {
    api.get("/api/recipes/")
      .then((res) => {
        console.log("Received data:", res.data);
        return res.data;
      })
      .then((data) => {
        setRecipes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search bar to filter recipes */}
      <div>
        <h2>Search Recipes:</h2>
        <input
          type="text"
          placeholder="Search by recipe name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display filtered recipes */}
      <div>
        <h2>Recipes:</h2>
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
