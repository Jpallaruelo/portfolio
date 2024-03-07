import React, { useState } from "react";
import "../testing.css";
import { useNavigate } from "react-router-dom";

function Testing() {
  const [code, setCode] = useState("Write your tests here");
  const [output, setOutput] = useState("");

  const navigate = useNavigate()

  const togglenavigate = () => {

    navigate('/portfolio')
  }


  const [testRun, setTestsRun] = useState(false)


  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const generateRandomTest = () => {
    setTestsRun(false);
    // Tipos de operaciones posibles
    const operations = [
      { name: "sumar", operation: "+", matcher: "toBe" },
      { name: "restar", operation: "-", matcher: "toBe" },
      { name: "multiplicar", operation: "*", matcher: "toBe" },
      { name: "dividir", operation: "/", matcher: "toBe" },
    ];

    // Seleccionar una operación aleatoria
    const randomOperation =
      operations[Math.floor(Math.random() * operations.length)];

    // Generar valores aleatorios para la prueba
    const a = Math.floor(Math.random() * 10) + 1; // Evitar cero en divisiones
    const b = Math.floor(Math.random() * 10) + 1; // Evitar cero en divisiones

    // Calcular resultado esperado basado en la operación
    let expectedResult;
    switch (randomOperation.operation) {
      case "+":
        expectedResult = a + b;
        break;
      case "-":
        expectedResult = a - b;
        break;
      case "*":
        expectedResult = a * b;
        break;
      case "/":
        expectedResult = a / b;
        break;
    }

    // Construir la cadena de la prueba
    const randomTestCode = `
  jestSimulator.describe('Prueba de ${randomOperation.name}', () => {
    jestSimulator.it('debería ${randomOperation.name} ${a} y ${b}', () => {
      const result = ${a} ${randomOperation.operation} ${b};
      jestSimulator.expect(result).${randomOperation.matcher}(${expectedResult});
    });
  });
    `;

    // Actualizar el estado 'code' con la nueva prueba
    setCode(randomTestCode);
  };

  const logResult = (message) => {
    console.log(message); // Log a consola del navegador
    setOutput((prevOutput) => `${prevOutput}\n${message}`); // Agregar a la salida en la UI
  };

  const executeCode = () => {
    setOutput(""); // Limpiar la salida antes de ejecutar el código

    setTestsRun(true);

    // Simulación de funciones básicas de Jest
    const jestSimulator = {
      describe(description, callback) {
        logResult(`Suite: ${description}`);
        callback();
      },

      it(description, callback) {
        try {
          callback();
          logResult(`  ✓ ${description}`);
        } catch (error) {
          logResult(`  ✕ ${description}\n    ${error.message}`);
        }
      },

      expect(received) {
        return {
          toBe(expected) {
            if (received !== expected) {
              throw new Error(`Expected ${expected} but received ${received}`);
            }
          },
          // Puedes agregar más matchers de Jest según sea necesario
        };
      },
    };

    try {
      // Crear una nueva función que incluye el jestSimulator, logResult y el código del usuario
      const userCodeFunction = new Function("jestSimulator", "logResult", code);
      // Ejecutar la función con jestSimulator y logResult como argumentos
      userCodeFunction(jestSimulator, logResult);
    } catch (error) {
      logResult(`Error en la ejecución: ${error.message}`);

    }
  };

  return (
    <div className="container">
      <section className="">
        <h3>Unit Testing con Jest</h3>
        {/* Contenido de la sección */}
      </section>

      <section className="console-section">
        <div className="container">
          <section className="tech-section">
            <div className="tech-details">
              <div className="left-column">
                <img
                  src="/images/testing.jpg"
                  alt="React Logo"
                  className="tech-logo"
                />
              </div>
              <div className="right-column">
                <p>
                  Utilizo Jest para realizar pruebas unitarias, asegurando que
                  cada parte individual de mi código funcione correctamente de
                  forma aislada.
                </p>


              </div>
            </div>
          </section>
          {/* Otras secciones */}
        </div>

        <textarea
          className="code-input"
          value={code}
          onChange={handleCodeChange}
          rows={10}
          cols={80}

        />
        <button className="button" onClick={executeCode}>
          Ejecutar Pruebas
        </button>
        <button className="button" onClick={generateRandomTest}>
          Generar Prueba Aleatoria
        </button>
        <button className="button" onClick={togglenavigate}>
          PORTFOLIO
        </button>

        <div className="output">
          <h3>{testRun ? "RESULT" : "COSOLE.LOG"}</h3>
          {output}
        </div>
      </section>
    </div>
  );
}

export default Testing;
