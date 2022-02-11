import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardDivStyled = styled.div`
  margin: 2rem;
`;

const RecipeCard = ({ recipeObj }) => {
  return (
    <CardDivStyled>
      <Card>
        <CardImg top width="100%" src={recipeObj.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{recipeObj.label}</CardTitle>
          <CardText>{recipeObj.calories}</CardText>
          <Link to={`/recipes/${recipeObj.label}`}>
            <Button> Details </Button>
          </Link>
        </CardBody>
      </Card>
    </CardDivStyled>
  );
};

RecipeCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  calories: PropTypes.number,
};

export default RecipeCard;
