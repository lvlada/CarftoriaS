const sortUsersByRating = (users, asc = true) =>
  [...users].sort((a, b) => (asc ? a.avgRating - b.avgRating : b.avgRating - a.avgRating));

export { sortUsersByRating };
