import React from 'react'
import './recipe.css';

const Recipe = ({ title, description, pic, category, ingredients }) => {
    // console.log('hello',title);

    console.log('hiiii', ingredients);

    return (
        <div className={'recipeContainer'}>
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h2>{category}</h2>
                <ul className='ingList'>
                    {ingredients === undefined ? null : ingredients.map((item, index) => <li>{item}</li>)}
                </ul>
            </div>
            <div>
                <img className={'pic'} src={pic} alt='whatever' />
            </div>

        </div>
    )
}

export default Recipe
