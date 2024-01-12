import { render, screen } from '@testing-library/react';
import { Wrapper } from '../../../__jest__/utils/testUtils';
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
