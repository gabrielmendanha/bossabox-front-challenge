import React from "react";
import { Label, Input } from "../../components/fields";

function Search() {
  return (
    <>
      <Input type="search" placeholder="search" />
      <Input type="checkbox" id="search-tags" />
      <Label label="search in tags only" htmlFor="search-tags" />
    </>
  );
}

export default Search;
