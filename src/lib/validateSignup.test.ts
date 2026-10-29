import { describe, it, expect } from 'vitest';
import { validateSignup, type SignupValues } from './validateSignup';

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
};

describe('validateSignup', () => {
  it('1 accepts valid values with no errors', () => {
    const errors = validateSignup(valid, 10);
    expect(errors).toEqual({});
  });

  it('2 rejects 0 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '0' }, 10);
    expect(errors).toEqual({ tickets: 'Choose 1 to 4 tickets' });
  });

  it('3 rejects more than 4 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '5' }, 10);
    expect(errors).toEqual({ tickets: 'Choose 1 to 4 tickets' });
  });

  it('4 rejects fractional tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '1.5' }, 10);
    expect(errors).toEqual({ tickets: 'Choose 1 to 4 tickets' });
  });

  it('5 accepts 4 tickets when enough seats are left', () => {
    const errors = validateSignup({ ...valid, tickets: '4' }, 10);
    expect(errors).toEqual({});
  });

  it('6 rejects when tickets exceed seatsLeft', () => {
    const errors = validateSignup({ ...valid, tickets: '3' }, 2);
    expect(errors).toEqual({ tickets: 'Only 2 seats left' });
  });
});
