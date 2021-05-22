/* import { useState } from 'react';
import { PokeInfo } from './PokeInfo';

export function Search() {

    const [pokeName, setPokeName] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleButtonClick() {
        setSubmit(!submit)
    }
    const handleChange = (e) => {
        setPokeName(e.target.value)
        setSubmit(false)
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="header-info">
                        <h1>Poke info</h1>

                        <p>Digite o nome do Pokemon:</p>
                        <form action="">
                            <input type="text"
                                onChange={handleChange}
                                value={pokeName}
                            />
                        </form>
                        <button type="button" onClick={handleButtonClick}>Procurar</button>
                    </div>
                </div>
                <PokeInfo name={pokeName} submit={submit} />
            </section>
        </>
    )
} */