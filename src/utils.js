
const capitalizeFirstLetter = (string) =>
    (
        string.charAt(0).toUpperCase() + string.slice(1)
    )

const countries = ['Serbia', 'Croatia', 'Bulgaria', 'Greece', 'Montenegro', 'Romania']

export { capitalizeFirstLetter, countries }