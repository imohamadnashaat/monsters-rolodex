import './search-box.styles.css';

const SearchBox = (props) => {
  const { className, placeholder, onSearchHandler } = props;

  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
};

export default SearchBox;
