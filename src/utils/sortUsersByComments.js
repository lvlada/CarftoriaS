const sortUsersByComments = (users, asc = true) =>
  [...users].sort((a, b) =>
    asc ? a.comments.length - b.comments.length : b.comments.length - a.comments.length
  );

export { sortUsersByComments };
