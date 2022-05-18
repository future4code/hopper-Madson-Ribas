import React, { useState } from "react";
import styles from './etapa1.css'

function Etapa_1() {

    const options = ["Ensino Médio Incompleto", "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"]
    
    const [value, setValue] = useState("Ensino Médio Incompleto");

    const handleChange = (e) => {
      setValue({ value: e.target.value });
      console.log(value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
        <div>
            <h1>ETAPA 1 - DADOS PESSOAIS</h1>
            <form>
                <label>1. Qual seu nome?</label>
                <input type="text" />
                <label>2. Qual sua idade?</label>
                <input type="number" />
                <label>3. Qual seu e-mail?</label>
                <input type="e-mail" />
                <label>4. Qual seu nome?</label>
                <select value={value} onChange={handleChange}>
                    <option value="grapefruit">Ensino Médio Incompleto</option>
                    <option value="lime">Ensino Médio Completo</option>
                    <option value="coconut">Ensino Superior Incompleto</option>
                    <option value="mango">Ensino Superior Completo</option>
                </select>
            </form>

        </div>
    )
}

export default Etapa_1