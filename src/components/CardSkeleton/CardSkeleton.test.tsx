import { render, screen } from '@testing-library/react';
import { Wrapper } from '../../../__jest__/utils/testUtils';
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
