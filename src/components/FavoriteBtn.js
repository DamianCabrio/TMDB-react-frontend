const FavoriteBtn = ({ isFavorite, onClick }) => {
  return (
    <button
      className="favorite-btn"
      onClick={onClick}
    >
      {isFavorite ? '❤️' : '🖤'}
    </button>
  );
}

export default FavoriteBtn;