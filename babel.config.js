const plugins = [
  [
    'babel-plugin-styled-components',
    {
      pure: true,
    },
  ],
];

export default {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins,
};
