import styled from 'styled-components';

type ResetProgressProps = {
    onReset: () => void;
};

const ResetButton = styled.button`
    margin: 1px;
    font-size: 14px;
    background-color: white;
    width: 100px;
    height: 30px;
    &:hover {
        background-color: #33FFE0;
    }
`;

export const ResetProgress = (props: ResetProgressProps) => {
    const { onReset } = props;

    return (
        <div>
            <ResetButton onClick={() => onReset()}>Reset</ResetButton>
        </div>
    );
}