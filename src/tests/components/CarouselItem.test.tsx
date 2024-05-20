import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CarouselItem from '../../components/CarouselItem';

const mockFest = {
  id: 5,
  imagen:
    'https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  nombre: 'Indie Waves Festival',
  descripcion:
    'Descubre las últimas bandas y artistas independientes en el escenario indie más grande del año. Indie Waves Festival es el lugar donde las nuevas tendencias musicales toman forma.',
  categoria: 'Indie',
  precio: 65,
  ciudad: 'Barcelona',
  fecha: '2024-09-13',
  destacado: false,
};

describe('<CarouselItem/>', () => {
  test('should match with snapshot', () => {
    const { container } = render(<CarouselItem fest={mockFest} />);

    expect(container).toMatchSnapshot();
  });

  test('should render information about one fest', () => {
    render(<CarouselItem fest={mockFest} />);

    const image = screen.getByRole('img', {
      name: 'Indie Waves Festival',
    });

    const title = screen.getByRole('heading', {
      level: 4,
      name: 'Indie Waves Festival',
    });

    const description = screen.getByText(
      'Descubre las últimas bandas y artistas independientes en el escenario indie más grande del año. Indie Waves Festival es el lugar donde las nuevas tendencias musicales toman forma.'
    );

    expect(image).toBeDefined();
    expect(title).toBeDefined();
    expect(description).toBeDefined();
  });
});
