import {
  FaceBookImg,
  FaceBookImgLight,
  InstagramImg,
  InstagramImgLight,
  LinkedInImg,
  LinkedInImgLight,
  TwitterImg,
  TwitterImgLight,
} from '@src/assets/footer';

export const footerLocalLinksOne = [
  { title: 'TermsPrivacyPolicy & Safety', link: '#' },
  { title: 'How YouTube works', link: '#' },
  { title: 'Test new features', link: '#' },
];

export const footerLocalLinksTwo = [
  [
    { title: 'About', link: '#' },
    { title: 'Press', link: '#' },
    { title: 'Copyright', link: '#' },
  ],
  [
    { title: 'Contact us', link: '#' },
    { title: 'Creators', link: '#' },
  ],
  [
    { title: 'Advertise', link: '#' },
    { title: 'Developers', link: '#' },
  ],
];

export const footerSocialLinks = [
  {
    title: 'facebook',
    dark: FaceBookImg,
    light: FaceBookImgLight,
    href: 'https://web.facebook.com/ModsenSoftware/',
  },
  {
    title: 'instagram',
    dark: InstagramImg,
    light: InstagramImgLight,
    href: 'https://www.instagram.com/modsencompany/',
  },
  {
    title: 'linkedin',

    dark: LinkedInImg,
    light: LinkedInImgLight,
    href: 'https://www.linkedin.com/company/modsen/',
  },
  {
    title: 'twitter',
    dark: TwitterImg,
    light: TwitterImgLight,
    href: 'https://twitter.com/modsencompany',
  },
];
