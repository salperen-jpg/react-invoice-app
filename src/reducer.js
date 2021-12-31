import {
  CLOSE_MODAL,
  OPEN_MODAL,
  DISCARD_FORM,
  FILTER_BY_STATUS,
} from './actions';
export const reducer = (state, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case DISCARD_FORM:
      return {
        ...state,
        isModalOpen: false,
        // return empty input values then.
      };
    case FILTER_BY_STATUS:
      const filteredInvoices = state.invoices.filter((item) => {
        if (action.payload === 'all') {
          return item;
        }
        if (item.status === action.payload) {
          return item;
        }
        return null;
      });

      return { ...state, filtered: filteredInvoices };
    case 'FIRST_RENDER':
      return { ...state, filtered: state.invoices };
    default:
      return { ...state };
  }
};
