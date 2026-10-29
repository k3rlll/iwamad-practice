import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { test, expect } from 'vitest';
import { EventsPage } from './EventsPage';
import { events } from '../data/events';

test('renders one card per event', () => {
  render(
    <MemoryRouter>
      <EventsPage />
    </MemoryRouter>,
  );

  expect(screen.getAllByRole('article')).toHaveLength(events.length);
});
