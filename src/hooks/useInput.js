import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [userInput, setUserInput] = useState(defaultValue);

  const [isInputEditted, setIsInputEditted] = useState(false);

  const valueIsValid = validationFn(userInput);
  function handleInputChange(event) {
    setUserInput(event.target.value);
    setIsInputEditted(false);
  }

  function handleInputBlurChange() {
    setIsInputEditted(true);
  }

  return {
    value: userInput,
    handleInputChange: handleInputChange,
    handleInputBlurChange: handleInputBlurChange,
    hasError: isInputEditted && !valueIsValid
  };
}
