export const maxWordsTruncate = (str, maxWords) => {
  const words = str.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return str;
}