type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let x = 1; x <= totalPages; x++) {
    pageNumbers.push(x);
  }

  return (
    <section className='container mx-auto flex gap-10 justify-center mt-10 pb-10'>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className='bg-blue-500 text-white font-bold py-2 px-10 rounded disabled:opacity-50'
          onClick={() => onPageChange(number)}>
          {number}
        </button>
      ))}
    </section>
  );
};

export default Pagination;
