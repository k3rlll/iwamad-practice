import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import { LikeButton } from './LikeButton';
import { LikesProvider } from '../context/LikesContext';

test('LikeButton updates text on click', async () => {
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  );

  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('♡ Like');

  await userEvent.click(button);
  expect(button).toHaveTextContent('❤️ Liked (1)');
});