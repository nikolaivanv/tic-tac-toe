export function checkWinner(fieldState: string[]): string | undefined {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (fieldState[a] && fieldState[a] === fieldState[b] && fieldState[a] === fieldState[c]) {
            return fieldState[a];
        }
    }
    return undefined;
};