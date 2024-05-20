type PaginationProps = {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = [];

  for (let x = 1; x <= totalPages; x++) {
    pageNumbers.push(x);
  }

  return (
    <section className='container mx-auto flex gap-3 justify-center mt-10 pb-10'>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded'
          onClick={() => onPageChange(number)}>
          {number}
        </button>
      ))}
    </section>
  );
};

export default Pagination;
