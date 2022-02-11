import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import RecipeCard from './RecipeCard';

const RecipesDivStyled = styled.div`
	padding: 1rem 2rem;
	p {
		color: grey;
		text-align: center;
	}
`;

function RecipeDiv() {
	const [recipes, setRecipes] = useContext(RecipeContext);

	return (
		<RecipesDivStyled>
			<p>
				{recipes.length} {recipes.length > 1 ? 'Results' : 'Result'}{' '}
			</p>
			<Row>
				{recipes.map((food, index) => {
					return (
						<Col lg='4' md='6' sm='12' key={index}>
							<RecipeCard recipeObj={food.recipe} />
						</Col>
					);
				})}
			</Row>
		</RecipesDivStyled>
	);
}

export default RecipeDiv;
