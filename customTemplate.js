export default (_, { classes }) => {
  return Object.keys(classes)
    .map((key) => `export const ${key}: string`)
    .join('\n');
};
