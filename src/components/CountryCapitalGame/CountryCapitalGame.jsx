import { useState } from 'react';
import './CountryCapitalGame.css';

import win from '../../assets/win.png';
import fail from '../../assets/fail.png';

const CountryCapitalGame = ({ data }) => {

    const countries = Object.keys(data);
    const capitals = Object.values(data);

    const [options, setOptions] = useState(
        [...countries, ...capitals]
            .sort(() => Math.random() - 0.5)
            .map((value) => ({
                value,
                state: "DEFAULT"
            }))
    );

    const [selected, setSelected] = useState();
    const [score, setScore] = useState(0);
    const isGameOver = options.length === 0;

    const handleClick = (option) => {

        if (!selected) {
            setSelected(option);
            setOptions(
                options.map((opt) => {
                    return opt === option ?
                        {
                            ...opt,
                            state: "SELECTED"
                        }
                        : { ...opt, state: "DEFAULT" };
                })
            )
        } else {
            if (
                selected.value === data[option.value] ||
                data[selected.value] === option.value
            ) {
                setOptions(
                    options.filter((opt) => {
                        return !(
                            opt.value === selected.value || opt.value === option.value
                        )
                    })
                )
                setScore(score + 1)
            } else {
                setOptions(
                    options.map((opt) => {
                        return opt.value === selected.value ||
                            opt.value === option.value ?
                            { ...opt, state: "WRONG" } : { ...opt, state: "DEFAULT" };
                    })
                )
                setScore(score - 1)
            }
            setSelected(undefined);
        }

    }
    
    return (
        <>
            <div className="heading">Country-Capital Game</div>
            <div className="subheading">Select correct pair of countries and their capitals to win.</div>
            <div className="gameContainer">
                {isGameOver ?
                    <div className='message congrats'>
                        <img src={win} alt=''></img>
                        <div>Congratulations ! Your score is {score}.</div>
                        <button
                            style={{ backgroundColor: '#009BFF', color: 'white' }}
                            onClick={() => window.location.reload()}>
                            Restart
                        </button>
                    </div> :
                    score === -3 ?
                        <div className='message failed'>
                            <img src={fail} alt=''></img>
                            <div>Game over !</div>
                            <button
                                style={{ backgroundColor: '#009BFF', color: 'white' }}
                                onClick={() => window.location.reload()}>
                                Restart
                            </button>
                        </div> :
                        options.map((option, index) => (
                            <button
                                className={option.state === "SELECTED" ? "selected" : option.state === "WRONG" ? "wrong" : ''}
                                value={option}
                                onClick={() => { handleClick(option) }}
                                key={index}>
                                {option.value}
                            </button>
                        ))}
            </div>
            <div className='subheading' style={{ marginTop: '0px' }}>Score : {score}</div>
        </>
    )
}

export default CountryCapitalGame;