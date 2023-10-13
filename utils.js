export function prettifyList(inputList) {
  // Check if the input is an array
  if (!Array.isArray(inputList)) {
    return [];
  }

  // Capitalize the first letter of each word and trim trailing spaces
  const prettifiedList = inputList.map((item) => {
    const words = item.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).trim();
    });
    return capitalizedWords.join(' ');
  });

  return prettifiedList;
}
