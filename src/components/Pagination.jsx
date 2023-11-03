export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center space-x-2">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`bg-black hover:bg-gray-900 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded space-x-2 ${
              page == currentPage ? 'active--link ' : ''
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
