import React, { useState, useEffect, useCallback } from "react";
import { Label, Input } from "../../components/fields";
import debounce from "lodash.debounce";

function Search(props) {
  const { onSearch } = props;
  const [searchTags, setSearchTags] = useState(false);
  const [searchTerm, setSearchTerm] = useState(undefined);

  const controller = new AbortController();
  const { signal } = controller;

  const debouncedSearch = useCallback(
    debounce(
      (searchTerm, searchTags, signal) =>
        onSearch(searchTerm, searchTags, signal),
      300
    ),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm, searchTags, signal);

    return () => {
      controller.abort();
    };
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
