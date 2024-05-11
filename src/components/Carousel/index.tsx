import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItem from '../CarouselItem';
import { Fest } from '../../types';
import useFetch from '../hooks/useFetch';

const CarouselEvents = () => {
  const fests = useFetch('http://localhost:3000/festivales');

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}>
      {fests.data?.map((fest: Fest) => (
        <CarouselItem
          fest={fest}
          key={fest.id}
        />
      ))}
    </Carousel>
  );
};

export default CarouselEvents;