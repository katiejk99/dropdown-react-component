function createOptionsList(externalList) {
  // Check if the input is an array
  if (!Array.isArray(externalList)) {
    return [];
  }

  // Convert the elements of the external list to options
  const optionsList = externalList.map((item) => {
    // Split the item into words, capitalize each word, and join them back
    const name = item
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      name, // Use the item as the option name
      // You can add additional properties if needed, e.g., id, value, etc.
    };
  });

  return optionsList;
}
