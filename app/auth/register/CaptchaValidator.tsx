import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';

/**
 * Componente funcional para mostrar y validar un Captcha.
 * @returns Un componente de React que muestra el Captcha y un campo de entrada para la validación.
 */
const CaptchaValidator: React.FC = () => {
  // Estado para el mensaje de validación
  const [validationMessage, setValidationMessage] = useState<string>('');
  // Estado para indicar si la validación fue exitosa
  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);
  // Referencia al campo de entrada del usuario
  const userInputRef = useRef<HTMLInputElement>(null);

  // 1. Inicializa el Captcha al montar el componente
  useEffect(() => {
    // El '1' indica el número de caracteres a generar, puedes ajustarlo.
    loadCaptchaEnginge(6, 'white', 'black', 'upper');
  }, []);

  /**
   * Función para manejar el intento de validación del Captcha.
   * @param e Evento de formulario para prevenir la recarga de la página.
   */
  const handleCaptchaValidation = (e: React.FormEvent) => {
    e.preventDefault();

    const user_captcha_input = userInputRef.current?.value;

    if (!user_captcha_input) {
      setValidationMessage('Por favor, ingresa el texto del Captcha.');
      setIsCaptchaValid(false);
      return;
    }

    // 2. Llama a la función de validación de la librería
    const isValid = validateCaptcha(user_captcha_input, false); // El 'false' hace que no recargue/resetee automáticamente

    if (isValid) {
      setValidationMessage('¡Validación exitosa! 🎉');
      setIsCaptchaValid(true);
    } else {
      setValidationMessage('Validación fallida. Por favor, inténtalo de nuevo.');
      setIsCaptchaValid(false);

      // Si falla, recargamos el Captcha y limpiamos el campo de entrada
      loadCaptchaEnginge(6, 'white', 'black', 'upper');
      if (userInputRef.current) {
        userInputRef.current.value = '';
      }
    }
  };

  /**
   * Función para recargar el Captcha manualmente (útil si el usuario no puede leerlo).
   */
  const handleRefreshCaptcha = () => {
    loadCaptchaEnginge(6, 'white', 'black', 'upper');
    setValidationMessage('');
    setIsCaptchaValid(false);
    if (userInputRef.current) {
        userInputRef.current.value = '';
    }
  }


  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '20px' }}>Verificación de Seguridad</h2>
      
      {/* 3. Renderiza el componente que muestra el Captcha */}
      <div style={{ marginBottom: '10px' }}>
        <LoadCanvasTemplate />
      </div>

      <button 
        onClick={handleRefreshCaptcha} 
        style={{ marginBottom: '20px', padding: '8px 15px', cursor: 'pointer', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}
        type="button"
      >
        🔄 Recargar Captcha
      </button>

      {/* Formulario de validación */}
      <form onSubmit={handleCaptchaValidation}>
        <input
          ref={userInputRef}
          type="text"
          placeholder="Ingresa el texto de arriba"
          style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          disabled={isCaptchaValid} // Deshabilita el input si ya es válido
        />

        <button
          type="submit"
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: isCaptchaValid ? '#4CAF50' : '#0070f3', // Color condicional
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: isCaptchaValid ? 'not-allowed' : 'pointer' 
          }}
          disabled={isCaptchaValid} // Deshabilita el botón si ya es válido
        >
          {isCaptchaValid ? 'Verificado' : 'Validar Captcha'}
        </button>
      </form>

      {/* Mensaje de estado */}
      {validationMessage && (
        <p style={{ 
            marginTop: '15px', 
            color: isCaptchaValid ? 'green' : 'red', 
            fontWeight: 'bold' 
        }}>
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default CaptchaValidator;