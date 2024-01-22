import { Wrapper } from '@jest-dir/utils/testUtils';
import { FaceBookImg, FaceBookImgLight } from '@src/assets/footer';
import { render, screen } from '@testing-library/react';

import { FooterSocialLink } from '.';

describe('Footer social link', () => {
  test('element renders', async () => {
    const props = {
      title: 'facebook',
      dark: FaceBookImg,
      light: FaceBookImgLight,
      href: 'https://web.facebook.com/ModsenSoftware/',
    };
    render(
      <Wrapper>
        <FooterSocialLink linkData={props} />
      </Wrapper>
    );

    const link = screen.getByTestId('socialLink');

    expect(link).toBeInTheDocument();
  });
});
