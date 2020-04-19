import React, { useState, useEffect, useCallback } from "react";
import { Label, Input, Checkbox } from "../../components/fields";
import debounce from "lodash.debounce";

function Search(props) {
  const { onSearch } = props;
  const [searchTags, setSearchTags] = useState(false);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [checked, setChecked] = useState(false);

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

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onChangeTags = (event) => {
    setChecked(!checked);
    setSearchTags(event.target.checked);
  };

  return (
    <>
      <Input
        type="search"
        placeholder="Type what you are looking for..."
        handleChange={onChange}
      />
      <Checkbox
        id="search-tags"
        checked={checked}
        handleChange={onChangeTags}
      />
      <Label label="tags only" htmlFor="search-tags" />
    </>
  );
}

export default Search;
