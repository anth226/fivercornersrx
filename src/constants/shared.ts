export const CONSTANTS = {
    PHONE_NUMBER: '1-888-803-3039',
    MONTH_NAMES: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ],
    EXPIRY_YEARS: [
        ...Array.from({ length: 10 }, () => Math.random() * 100).map((item, index) => (new Date().getFullYear() + index).toString())
    ]
}

