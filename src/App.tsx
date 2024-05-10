import Header from './components/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Header />
      <section className='bg-slate-100'>
        <Home />
      </section>
    </>
  );
}

export default App;
