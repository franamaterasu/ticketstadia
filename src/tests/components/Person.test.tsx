import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import user from '@testing-library/user-event';
import Person from '../../components/Person';
import store from '../../store';
import { Provider } from 'react-redux';

type WrapperProps = {
  children: JSX.Element;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

const PersonMock = {
  id: 3,
  imagen: 'https://randomuser.me/api/portraits/men/61.jpg',
  nombre: 'Lucas Gordon',
  ciudad: 'Barcelona',
  telefono: '650344452',
  email: 'lucas.gordon@example.com',
};

describe('<Person/>', () => {
  test('should match with snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Wrapper>
          <Person info={PersonMock} />
        </Wrapper>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render information about one Person', () => {
    render(
      <MemoryRouter>
        <Wrapper>
          <Person info={PersonMock} />
        </Wrapper>
      </MemoryRouter>
    );

    const image = screen.getByRole('img', {
      name: 'Lucas Gordon',
    });

    const name = screen.getByRole('heading', {
      level: 3,
      name: 'Lucas Gordon',
    });

    const email = screen.getByText('lucas.gordon@example.com');

    const button = screen.getByRole('button', {
      name: 'Agregar amigo',
    });

    expect(image).toBeDefined();
    expect(name).toBeDefined();
    expect(email).toBeDefined();
    expect(button).toBeDefined();
  });

  test('should render button disabled and text changed when click on it', async () => {
    user.setup();

    render(
      <MemoryRouter>
        <Wrapper>
          <Person info={PersonMock} />
        </Wrapper>
      </MemoryRouter>
    );

    const initialButton = screen.getByRole('button', {
      name: 'Agregar amigo',
    });

    await user.click(initialButton);

    const clickedButton = screen.getByRole('button', {
      name: 'Amigo agregado',
    });

    expect(clickedButton).toBeDefined();

    expect(clickedButton).toBeDisabled();
  });
});
