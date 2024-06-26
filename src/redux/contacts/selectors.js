import { createSelector } from "@reduxjs/toolkit";
import { selectFiltersName } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltersName],
  (contacts, filtersName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtersName.toLowerCase())
    );
  }
);
