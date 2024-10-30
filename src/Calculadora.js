import React from "react";


function Calculadora(props) {

const num1 = parseInt(props.num1);
const num2 = parseInt(props.num2);
return (
    <div>
        <p>la suma de {num1} y {num2} es : {num1+ num2}</p>
    </div>
)
}

export default Calculadora;