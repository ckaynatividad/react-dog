import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import Enemy from './EnemyDetail';

it('should render enemy info', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/8']}>
      <Route path="/:id" component={Enemy} />
    </MemoryRouter>
  );
  await screen.findByText('ginseng jar');
  expect(container).toMatchSnapshot();
});