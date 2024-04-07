import styled from 'styled-components'
import { checkWinner } from '../helpers/checkWinner';
import { useStickyState } from '../hooks/use-sticky-state';

type BoardState = string[];
type BoardStateHistory = BoardState[];
    
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

const Game = () => {
    const [boardStateHistory, setBoardStateHistory] =  useStickyState<BoardStateHistory>('tic-tac-toe:turns',[]);
    const [currentTurn, setCurrentTurn] = useStickyState<number>('tic-tac-toe:current-turn', 0);
    const currentBoardState = boardStateHistory[currentTurn-1] || Array(9).fill('');


    const onCellClick = (index: number) => {
        if (currentBoardState[index] !== '') {
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

    const winner = checkWinner(currentBoardState);

    // To do: Add a check for a draw
    // To do: Add styling to show the winning line
    // To do: Add styling for a board and for other info
    // To do: Stop game when there is a winner
    // Put board into a separate component
    // Put cell into a separate component

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div>
                {
                    boardStateHistory.map((boardState, index) => (
                        <button onClick={() => goBack(index)}>{index+1}</button>
                    ))
                }
            </div>
            <div>
                Turn number: {currentTurn + 1}
            </div>
            <div>
                {winner ? `Winner: ${winner}` : ''}
                {!winner && (boardStateHistory.length % 2 === 0 ? "X's turn" : "O's turn")}

            </div>
            <FieldContainer>
                {currentBoardState.map((value: string, index: number) => {
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
            <button onClick={() => onReset()}>Reset</button>
        </div>
    );
};

export default Game;