import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import EnemiesView from './EnemiesList';

it('should render home', async () => {
  const { container } = render(
    <MemoryRouter>
      <EnemiesView />
    </MemoryRouter>
  );
  await screen.findByText('ginseng jar');
  expect(container).toMatchSnapshot();
});