import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { FooterLink } from '.';

describe('Footer link', () => {
  test('element renders', async () => {
    const props = {
      title: 'Modsen',
      link: '#',
    };
    render(
      <Wrapper>
        <FooterLink linkData={props} />
      </Wrapper>
    );

    const title = screen.getByText(/Modsen/i);

    expect(title).toBeInTheDocument();
  });
});
