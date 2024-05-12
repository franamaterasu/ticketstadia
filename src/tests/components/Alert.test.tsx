import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Alert from '../../components/Alert';

describe('<Alert/>', () => {
  test('should match with snapshot', () => {
    const { container } = render(
      <Alert message='Im baby try-hard keytar kombucha cardigan selvage' />
    );

    expect(container).toMatchSnapshot();
  });

  test('should render title and paragraph', () => {
    render(
      <Alert message='Im baby try-hard keytar kombucha cardigan selvage' />
    );

    const message = screen.getByText(
      'Im baby try-hard keytar kombucha cardigan selvage'
    );

    expect(message).toBeDefined();
  });
});
