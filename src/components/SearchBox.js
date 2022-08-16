import Swal from "sweetalert2";

const SearchBox = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const searchKeyword = e.target.elements.search.value;

    if (searchKeyword.trim().length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a search keyword",
      });
    }
  };

  return (
    <form className="pt-3" onSubmit={submitHandler}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Search for a movie"
          aria-label="Search for a movie"
          aria-describedby="search-button"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="search-button"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
