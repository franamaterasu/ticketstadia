type ImageProfileProps = {
  image: string;
};

const ImageProfile = ({ image }: ImageProfileProps) => {
  return (
    <img
      src={image}
      alt='Imagen de Perfil'
      className='rounded-lg'
      width={40}
    />
  );
};

export default ImageProfile;
