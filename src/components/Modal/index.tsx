type ModalProps = {
  children: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className='bg-gray-900/70 fixed top-0 left-0 w-full h-full grid content-center px-10'>
      <section className='bg-white mx-auto p-10 rounded-lg text-center'>
        {children}
      </section>
    </div>
  );
};

export default Modal;
