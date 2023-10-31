import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetails() {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState([]);

  const getRecipeDetails = async () => {
      let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
      let data = await response.json();
        setRecipeDetails([data.recipe]);
  }

  useEffect(() => {
    getRecipeDetails();
  }, [id]);

  return (
    <div className="recipe-details vh-100 text-center">
      {recipeDetails.map((recipeDetail) => {
        return(
          <div className="recipe-detail">
             <img src={recipeDetail.image_url} />
             <p className='text-center'>{recipeDetail.ingredients}</p>
          </div>
       
      )})}
    </div>
  )
}
