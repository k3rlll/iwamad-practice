import { useState } from 'react';
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react';
import type { CampusEvent } from '../data/events';
import { validateSignup, type SignupValues } from '../lib/validateSignup';
import { TextField } from './ui/TextField';
import { Button } from './ui/Button';

type EventSignupFormProps = {
  event: CampusEvent;
};

const initialValues: SignupValues = {
  fullName: '',
  email: '',
  tickets: '1',
};

export function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(initialValues);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);

  const errors = validateSignup(values, seatsLeft);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTouched((current) => ({ ...current, [e.target.name]: true }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      const bookedTickets = Number(values.tickets);
      const bookedName = values.fullName.trim();
      setSeatsLeft((current) => current - bookedTickets);
      setBookingMessage(`Booked: ${bookedTickets} for ${bookedName}.`);
      setValues(initialValues);
      setTouched({});
      setSubmitAttempted(false);
    } else {
      setBookingMessage(null);
    }
  };

  const getError = (field: keyof SignupValues) => {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  };

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
      {bookingMessage && <p role="status">{bookingMessage}</p>}
    </div>
  );
}
