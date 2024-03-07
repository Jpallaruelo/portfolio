import React, { useState, useCallback, useEffect } from 'react';



function LoadData() {
    const [contador, setContador] = useState(0);
    const [autoincrementar, setautoincrementar] = useState(false)

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    useEffect(() => {

        let interval
        if (autoincrementar) {

            interval = setInterval(() => {

                setContador((time) => time + 1)
            }, 1000)


        }

        return () => clearInterval(interval);



    }, [autoincrementar])





    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={() => setautoincrementar(!autoincrementar)}>

                {autoincrementar ? 'Detener automatico' : "incrementar Automaticamente"}


            </button>
        </div>
    );
}


export default LoadData;

