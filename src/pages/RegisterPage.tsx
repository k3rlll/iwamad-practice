import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { validateRegistration, type RegistrationValues } from '../lib/validateRegistration';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button'; 
export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = validateRegistration(values);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
  };

  const getError = (field: keyof RegistrationValues) => {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  };

  if (submitAttempted && Object.keys(errors).length === 0) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>;
  }

  return (
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
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getError('password')}
      />
      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getError('confirmPassword')}
      />
      
      <div className="field">
        <div className="check">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="acceptTerms">Accept the terms to continue</label>
        </div>
        {getError('acceptTerms') && (
          <p className="field-error">{errors.acceptTerms}</p>
        )}
      </div>

      <Button type="submit">Create account</Button>
    </form>
  );
}