const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);

  const day = parsedDate.getDate();
  const month = `0${parsedDate.getMonth() + 1}`.slice(-2);
  const year = parsedDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
