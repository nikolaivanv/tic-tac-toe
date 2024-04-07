interface GameResult {
    winner: string | undefined;
    winningLine: number[] | undefined;
}

export function checkWinner(fieldState: string[]): GameResult {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (fieldState[a] && fieldState[a] === fieldState[b] && fieldState[a] === fieldState[c]) {
            return {
                winner: `${fieldState[a]} won`,
                winningLine: winCombinations[i]
            };
        }
    }
    if (!fieldState.includes('')) {
        return {
            winner: 'Draw',
            winningLine: undefined
        };
    }

    return {
        winner: undefined,
        winningLine: undefined
    };
};