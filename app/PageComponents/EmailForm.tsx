import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import { Exo_2 } from 'next/font/google';

import arrow from '@/public/arrow.svg';
import pendingIcon from '@/public/pending.svg';
import errorIcon from '@/public/error.svg';
import check from '@/public/check.svg';
import styles from './EmailForm.module.scss';

const exo2 = Exo_2({ subsets: ['latin'] });

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setValid(emailRegex.test(inputValue));
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const response = await fetch('/waitlist', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        setEmail('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setPending(false);
  };

  return (
    <div>
      <form
        className={styles.form}
        autoComplete="off">
        <input
          type="text"
          name="emailAddress"
          style={exo2.style}
          className={
            error
              ? `${styles.emailInput} ${styles.errorInput}`
              : styles.emailInput
          }
          value={email}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className={email ? 'transparent' : ''}>
          Email address
        </label>
        <button
          className={
            error ? `${styles.submitBtn} ${styles.errorBtn}` : styles.submitBtn
          }
          onClick={() => {
            handleSubmit;
          }}
          disabled={!email || !valid || submitted || pending}>
          {!submitted && !error && !pending && (
            <Image
              className={styles.arrow}
              src={arrow}
              alt="submit arrow"
              fill
            />
          )}
          {submitted && !error && (
            <Image
              className={styles.check}
              src={check}
              alt="success"
              fill
            />
          )}
          {error && !pending && (
            <Image
              className={styles.error}
              src={errorIcon}
              alt="error"
              fill
            />
          )}
          {pending && (
            <Image
              className={styles.pending}
              src={pendingIcon}
              alt="pending"
              fill
            />
          )}
          GO
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
