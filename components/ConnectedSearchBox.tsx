import React from 'react';
import { useSearchBox } from 'react-instantsearch';
import SearchInput from './SearchInput'; // Import your custom search input component

const CustomSearchBox = ({ query, refine }: any) => {
  return <SearchInput query={query} refine={refine} />;
};

const ConnectedSearchBox = useSearchBox(props);

export default ConnectedSearchBox;