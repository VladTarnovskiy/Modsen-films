import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { CardSkeleton } from '.';

describe('Card skeleton', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <CardSkeleton />
      </Wrapper>
    );

    const skeleton = screen.getByTestId('card-skeleton');

    expect(skeleton).toBeInTheDocument();
  });
});
