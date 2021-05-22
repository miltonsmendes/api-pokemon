import { useState } from 'react';
import { PokeInfo } from './PokeInfo';

export function Search() {

    const [pokeName, setPokeName] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleButtonClick() {
        setSubmit(!submit)
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSubmit(!submit)
        }
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="header-info">
                        <h1>Poke info</h1>

                        <p>Digite o nome do Pokemon:</p>
                            <input type="text"
                                onChange={(e) => {
                                    setPokeName(e.target.value)
                                    setSubmit(false)
                                }}
                                onKeyUp={handleEnter}
                                value={pokeName}
                            />
                        <button type="button" onClick={handleButtonClick}>Procurar</button>
                    </div>
                </div>
                <PokeInfo name={pokeName} submit={submit} />
            </section>
        </>
    )
}