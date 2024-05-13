import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className='h-[100vh] grid lg:grid-cols-2'>
      <section className='flex items-center justify-center flex-col px-5'>
        <h1 className='lg:text-5xl text-6xl font-bold mb-3'>Ticketstadia</h1>
        <p className='text-2xl font-light mb-6 text-center'>
          Sintoniza tus emociones, reserva tus momentos
        </p>
        <button
          className='bg-blue-500 hover:bg-blue-700 w-1/4  mx-auto text-white font-bold py-2 px-4 rounded'
          onClick={() => loginWithRedirect()}>
          Login
        </button>
      </section>
      <section className='hidden overflow-hidden relative lg:block'>
        <img
          className='w-full h-full'
          src='https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
      </section>
    </section>
  );
};

export default Login;
