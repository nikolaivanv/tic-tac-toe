import { useState } from 'react';
import styled from 'styled-components'
import { checkWinner } from '../helpers/checkWinner';

const Game = () => {
    const [playerTurns, setPlayerTurns] =  useState<number[]>([])

    const FieldContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 300px;
        height: 300px;
    `;
    const Cell = styled.div`
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const onCellClick = (index: number) => {
        if (playerTurns.includes(index)) {
            return;
        }
        setPlayerTurns([...playerTurns, index]);
    }
    
    let fieldState = Array(9).fill('')
    playerTurns.forEach((value, index) => {
        fieldState[value] = index % 2 === 0 ? 'X' : 'O';
    });

    const winner = checkWinner(fieldState);

    return (
        <div>
            <div>
                Turn number: {playerTurns.length + 1}
            </div>
            <div>
                {winner ? `Winner: ${winner}` : ''}
                {!winner && (playerTurns.length % 2 === 0 ? "X's turn" : "O's turn")}

            </div>
            <FieldContainer>
                {fieldState.map((value: number, index: number) => {
                    return (
                        <Cell 
                            key={index}
                            onClick={() => onCellClick(index)}
                        >
                            {value}
                        </Cell>
                    );
                })}
            </FieldContainer>
            <button onClick={() => setPlayerTurns([])}>Reset</button>
        </div>
    );
};

export default Game;