import styled from 'styled-components';

import { checkWinner } from '../helpers/checkWinner';
import { useStickyState } from '../hooks/use-sticky-state';
import { BoardStateHistory } from '../shared.types';
import { HistoryControl } from './history-control';
import { GameProgress } from './game-progress';
import { Field } from './field';
import { ResetProgress } from './reset-progress';

const GameContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: black;
`;

const GameTitle = styled.h1`
    color: white;
`;

const Game = () => {
    const [boardStateHistory, setBoardStateHistory] =  useStickyState<BoardStateHistory>('tic-tac-toe:turns',[]);
    const [currentTurn, setCurrentTurn] = useStickyState<number>('tic-tac-toe:current-turn', 0);
    const currentBoardState = boardStateHistory[currentTurn-1] || Array(9).fill('');

    const { winner, winningLine} = checkWinner(currentBoardState);

    const onCellClick = (index: number) => {
        if (currentBoardState[index] !== '') {
            return;
        }
        if (winner) {
            return;
        }
        
        let newBoardState = [...currentBoardState];
        newBoardState[index] = currentTurn % 2 === 0 ? 'X' : 'O';
        setBoardStateHistory([...boardStateHistory.slice(0, currentTurn), newBoardState]);
        setCurrentTurn(currentTurn+1);
    }

    const goBack = (step: number) => {
        setCurrentTurn(step);
    }

    const onReset = () => {
        setBoardStateHistory([]);
        setCurrentTurn(0);
    }

    return (
        <GameContainer>
            <GameTitle>Tic Tac Toe</GameTitle>
            <GameProgress currentTurn={currentTurn} winner={winner} />
            <HistoryControl boardStateHistory={boardStateHistory} goBack={goBack} />
            <Field
                currentBoardState={currentBoardState}
                onCellClick={onCellClick}
                winningLine={winningLine}
            />
            <ResetProgress onReset={onReset}/>
        </GameContainer>
    );
};

export default Game;