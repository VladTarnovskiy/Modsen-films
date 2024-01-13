export const getDate = (dateInitValue: string): string => {
  const date = new Date(dateInitValue);
  const options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as Intl.DateTimeFormatOptions;

  const localDate = date.toLocaleDateString('en-EN', options);

  return localDate;
};
