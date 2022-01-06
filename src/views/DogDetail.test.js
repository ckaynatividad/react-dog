import { render, screen } from '@testing-library/react';
import Dog from './DogDetail';

test('dog details rendering', () => {
  const container = render(
    <Dog match={{ params: { id: 1 } }} />
  );
  expect(container).toMatchSnapshot();
});