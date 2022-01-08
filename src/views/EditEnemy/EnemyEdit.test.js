import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import EnemyEdit from './EnemyEdit';

it('should render enemy info in form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/8/edit']}>
      <Route path="/:id/edit" component={EnemyEdit} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('ginseng jar');
  expect(container).toMatchSnapshot();
});