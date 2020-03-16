import React, { useState, useEffect } from "react";
import { Label, Input } from "../../components/fields";

function Search(props) {
  const { onSearch } = props;
  const [searchTags, setSearchTags] = useState(false);
  const [searchTerm, setSearchTerm] = useState(undefined);

  useEffect(() => {
    onSearch(searchTerm, searchTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, searchTags]);

  const onChange = event => {
    setSearchTerm(event.target.value);
  };

  const onChangeTags = event => {
    setSearchTags(event.target.checked);
  };

  return (
    <>
      <Input type="search" placeholder="search" handleChange={onChange} />
      <Input type="checkbox" id="search-tags" handleChange={onChangeTags} />
      <Label label="search in tags only" htmlFor="search-tags" />
    </>
  );
}

export default Search;
