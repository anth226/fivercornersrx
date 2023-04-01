export enum BtnTypes {
    Success = "successBtn",
    Secondary = "secondaryBtn",
    Back = "backBtn",
}

export function is18YearsOld(dateString: any) {
    const currentDate = new Date();
    const enteredDate = new Date(dateString);
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // leap year

    // Calculate the number of milliseconds between the entered date and the current date
    const ageInMilliseconds = currentDate.getTime() - enteredDate.getTime();

    // Calculate the number of milliseconds in 18 years
    const eighteenYearsInMilliseconds = millisecondsPerYear * 18;

    // Compare the two values to determine if the entered date is at least 18 years old
    return ageInMilliseconds >= eighteenYearsInMilliseconds;
}

export function validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
