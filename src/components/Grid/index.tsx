type GridProps = {
  children: JSX.Element;
};

const Grid = ({ children }: GridProps) => {
  return (
    <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {children}
    </ul>
  );
};

export default Grid;
