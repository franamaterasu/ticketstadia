const Error = () => {
  return (
    <div className='h-[calc(100vh-72px)] bg-gray-100 flex flex-col justify-center items-center'>
      <h1 className='text-7xl font-bold text-blue-500 mb-4'>404</h1>
      <p className='text-xl mb-4'>Página no encontrada</p>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default Error;
