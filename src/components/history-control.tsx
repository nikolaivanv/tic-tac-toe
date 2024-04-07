import styled from 'styled-components';

import { BoardStateHistory } from "../shared.types";

type HistoryControlProps = {
    boardStateHistory: BoardStateHistory;
    goBack: (step: number) => void;
};

const HistoryControlDiv = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    color: white;
    height: 20px;
`;

const HistoryControlButton = styled.button`
    margin: 1px;
    font-size: 12px;
    background-color: white;
    &:hover {
        background-color: #33FFE0;
    }
`;

export const HistoryControl = (props: HistoryControlProps) => {
    const { boardStateHistory, goBack } = props;
    return (
        <HistoryControlDiv>
            {boardStateHistory.length >0 && (<div>Go to turn</div>)}
            <div>
                {
                    boardStateHistory.map((boardState, index) => (
                        <HistoryControlButton 
                            onClick={() => goBack(index)}
                            key={index}
                        >
                            {index+1}
                        </HistoryControlButton>
                    ))
                }
            </div>
        </HistoryControlDiv>
    );
};