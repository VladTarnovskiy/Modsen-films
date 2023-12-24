export default (dts, { classes }) => {
  return Object.keys(classes)
    .map((key) => `export const ${key}: string`)
    .join("\n");
};
