type ImageProfileProps = {
  image: string | undefined;
  size: number;
  classNames?: string;
};

const ImageProfile = ({ image, size, classNames }: ImageProfileProps) => {
  return (
    <img
      src={image}
      alt='Imagen de Perfil'
      className={`rounded-lg ${classNames}`}
      width={size}
    />
  );
};

export default ImageProfile;
