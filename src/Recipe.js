import React from 'react'
import './recipe.css';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Recipe = ({ title, description, pic, category, ingredients, directions }) => {
    // console.log('hello',title);

    return (
        <div className={'recipeContainer'}>
             <h1>{title}</h1>
            <div className={'row'}>
            <div>
                <h2>{description}</h2>
                <h2>{category}</h2>
                <ul className='ingList'>
                    {ingredients === undefined ? null : ingredients.map((item, index) => <li>{item}</li>)}
                </ul>
            </div>
            <div>
                <img className={'pic'} src={pic} alt='platter' />
                <div>
                    {documentToReactComponents(directions)}
                </div>
            </div>

        </div>
        </div>

    )
}

export default Recipe
