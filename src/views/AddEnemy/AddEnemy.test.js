import { render, screen } from '@testing-library/react';
import AddEnemy from './AddEnemy';

test('add enemy form should; render', () => {
  const container = render(
    <AddEnemy />
  );
  expect(container).toMatchSnapshot();
});