import React from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state: RootState) => state.contactForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: e.target.name as 'name' | 'email' | 'message', value: e.target.value },
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
      />
      <textarea
        name="message"
        value={message}
        onChange={handleChange}
        placeholder="Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;