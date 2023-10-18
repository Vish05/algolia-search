import { useSearchBox } from 'react-instantsearch';

const connectSearchBox = (Component: any) => {
  const SearchBox = (props: any) => {
    const data = useSearchBox();

    return <Component {...props} {...data} />;
  };

  return SearchBox;
};

function RawSearchBox(props: any) {
  const { refine, query } = props;

  return (
    <form>
      <input
        type="search"
        value={query}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  );
}

const SearchInput = connectSearchBox(RawSearchBox);

export default SearchInput
