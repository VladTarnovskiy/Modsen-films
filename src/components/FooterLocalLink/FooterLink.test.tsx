import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { FooterLocalLink } from '.';

describe('Footer local link', () => {
  test('element renders', async () => {
    const props = {
      title: 'Modsen',
      link: '#',
    };
    render(
      <Wrapper>
        <FooterLocalLink linkData={props} />
      </Wrapper>
    );

    const title = screen.getByText(/Modsen/i);

    expect(title).toBeInTheDocument();
  });
});
