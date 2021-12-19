export const getFilter = state => {
  const filter = state.phonebook.filter;
  const items = state.phonebook.items;
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
