import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { DetailsSkeleton } from '.';

describe('Details skeleton', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <DetailsSkeleton />
      </Wrapper>
    );

    const skeleton = screen.getByTestId('details-skeleton');

    expect(skeleton).toBeInTheDocument();
  });
});
