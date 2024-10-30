import React from 'react';

function Saludo(props){
     
    return (
        <>
    <h1> Buenos dias esto es una prueba de react y componentes </h1>
    <p>Mi nombre es: {props.nombre}</p>
    </>   
    )

}

export default Saludo;