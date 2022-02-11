import React, { useState, useEffect, useContext } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import { RecipeContext } from "../RecipeContext";

const SearchDivStyled = styled.div`
  padding: 2rem;
`;

const Search = () => {
  const [finalSearch, setFinalSearch] = useState("chicken");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useContext(RecipeContext);

  useEffect(async () => {
    const fetchedRecipes = await fetchRecipes(finalSearch);
    setRecipes(fetchedRecipes);
  }, [finalSearch]);

  const fetchRecipes = async (param) => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;
    const apiLink = `https://api.edamam.com/search?q=${param}&app_id=${APP_ID}&app_key=${APP_KEY}&`;
    const response = await fetch(apiLink);
    const data = await response.json();
    return data.hits;
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  const handleSubmit = () => {
    setFinalSearch(search);
    setSearch("");
  };
  return (
    <SearchDivStyled>
      <InputGroup>
        <Input onChange={handleChange} value={search} />
        <InputGroupAddon addonType="append">
          <Button color="danger" onClick={handleSubmit}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </SearchDivStyled>
  );
};

Search.propTypes = {
  search: PropTypes.string,
  handleChange: PropTypes.func,
  handleFetch: PropTypes.func,
};

export default Search;
