type AlertProps = {
  message: string;
};

const Alert = ({ message }: AlertProps) => {
  return (
    <div className='bg-red-500 text-white p-4 rounded-lg'>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
