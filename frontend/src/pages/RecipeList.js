import { useState, useEffect } from "react";
import DataDisplay from "../components/DataDisplay";
import { fetchAllRecipes } from "../services/Recipes";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchAllRecipes(setRecipes);
  }, []);

  return (
    <div>
      <DataDisplay data={recipes} />
    </div>
  );
}
