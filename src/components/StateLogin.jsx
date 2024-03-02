import { useInput } from '../hooks/useInput';
import Input from './Input';
import { hasMinLength, isEmail, isNotEmpty } from '../utils/validation';
export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailInputChange,
    handleInputBlurChange: handleEmailInputBlurChange,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordInputChange,
    handleInputBlurChange: handlePasswordInputBlurChange,
    hasError: passwordHasError,
  } = useInput('', (value) => {
    const passwordLengthValid = hasMinLength(value, 6);
    return passwordLengthValid && !isNotEmpty(value);
  });
  function handleSubmitForm(event) {
    event.preventDefault();
    if (emailHasError && passwordHasError) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailHasError && <p>Please Enter a valid Email</p>}
          type="email"
          name="email"
          onChange={(event) => handleEmailInputChange(event.target.value)}
          value={emailValue}
          onBlur={handleEmailInputBlurChange}
        />
        <Input
          label="Password"
          id="password"
          error={passwordHasError && <p>Please Enter a valid Password</p>}
          type="password"
          name="password"
          onChange={(event) => handlePasswordInputChange(event.target.value)}
          value={passwordValue}
          onBlur={handlePasswordInputBlurChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
