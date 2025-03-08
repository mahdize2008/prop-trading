export function faToEnNumbers(input) {
    if (typeof input !== "string") return input; // Return as is if input is not a string

    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return input.replace(/[۰-۹]/g, (char) => {
        const index = persianNumbers.indexOf(char);
        return englishNumbers[index] ?? char; // Fallback to original character if not found
    });
};
