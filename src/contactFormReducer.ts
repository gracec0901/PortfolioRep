interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  message: '',
};

type ContactFormAction =
  | { type: 'UPDATE_FIELD'; payload: { field: keyof ContactFormState; value: string } }
  | { type: 'RESET_FORM' };

const contactFormReducer = (
  state = initialState,
  action: ContactFormAction
): ContactFormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export default contactFormReducer;