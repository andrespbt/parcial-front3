import { useState } from 'react';
import { Card } from './components/Card';

export const App = () => {
  const [formValues, setFormValues] = useState({ name: '', password: '' });
  const [isErrors, setIsErrors] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const onInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const onFormSubmit = (e, values) => {
    e.preventDefault();
    const { name, color } = values;

    if (name === '' || color === '') {
      setIsErrors(true);
      setIsFormValid(false);
      return;
    }

    if (name[0] === ' ' || name.trim().length < 3) {
      setIsErrors(true);
      setIsFormValid(false);
      return;
    }

    if (color.length < 6) {
      setIsErrors(true);
      setIsFormValid(false);
      return;
    }

    setIsErrors(false);
    setIsFormValid(true);
  };

  return (
    <div className="w-96 mx-auto my-10">
      <h1 className="font-bold text-3xl text-center mb-5">Elige un color</h1>
      <form
        className="bg-gray-300 flex flex-col h-52 justify-center items-center gap-4 p-10 rounded-md"
        onSubmit={e => onFormSubmit(e, formValues)}>
        <label
          htmlFor="name"
          className="inline w-full">
          <input
            className="border-1 w-full border-black rounded-md pl-2 h-8"
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            onChange={onInputChange}
          />
        </label>
        <label
          htmlFor="color"
          className="inline w-full">
          <input
            className="border-1 w-full border-black rounded-md pl-2 h-8"
            type="text"
            name="color"
            placeholder="Ingresa tu color favorito (formato HEX)"
            onChange={onInputChange}
          />
        </label>

        <button
          type="submit"
          className="text-white bg-blue-600 w-full h-10 rounded-md">
          Enviar
        </button>
      </form>

      {isErrors && (
        <span className="text-sm text-red-500 font-bold text-center mt-3">
          Por favor chequea que la información sea correcta.
        </span>
      )}

      {isFormValid && (
        <Card
          name={formValues.name}
          color={formValues.color}
        />
      )}
    </div>
  );
};
