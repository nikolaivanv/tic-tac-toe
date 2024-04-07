import styled from 'styled-components';

type GameProgressProps = {
    currentTurn: number;
    winner: string | undefined;
};

const GameProgressContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 5px;
    color: white;
`;

export const GameProgress = (props: GameProgressProps) => {
    const { currentTurn, winner } = props;
    return (
        <GameProgressContainer>
            <div>
                {winner ? `${winner}!   ` : ''}
                {!winner && (currentTurn % 2 === 0 ? `Turn ${currentTurn+1}: go ahead X!` : `Turn ${currentTurn+1}: go ahead O!`)}
            </div>
        </GameProgressContainer>
    );
};