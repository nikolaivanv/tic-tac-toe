import styled from 'styled-components';

import { BoardState } from '../shared.types';

const FieldContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 300px;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Cell = styled.div<{ $highlighted?: boolean; }>`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$highlighted ? '#33FFE0' : 'white'};
    font-size: 24px;
    font-weight: bold;
`;

type FieldProps = {
    currentBoardState: BoardState;
    onCellClick: (index: number) => void;
    winningLine: number[] | undefined;
};

export const Field = (props: FieldProps) => {
    const { currentBoardState, onCellClick, winningLine } = props;
        
    return (
        <FieldContainer>
            {currentBoardState.map((value: string, index: number) => {
                return (
                    <Cell 
                        key={index}
                        onClick={() => onCellClick(index)}
                        $highlighted={ winningLine?.includes(index)}
                    >
                        {value}
                    </Cell>
                );
            })}
        </FieldContainer>
    );    
};