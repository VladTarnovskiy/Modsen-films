import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { Footer } from '.';

describe('Footer', () => {
  test('element renders', async () => {
    render(
      <Wrapper>
        <Footer />
      </Wrapper>
    );

    const localLink = screen.getByText(/TermsPrivacyPolicy & Safety/i);
    const creationDate = screen.getByText(/2023 Modsen company/i);

    expect(localLink).toBeInTheDocument();
    expect(creationDate).toBeInTheDocument();
  });
});
