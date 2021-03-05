
const capitalizeFirstLetter = (string:string):string =>
    (
        string.charAt(0).toUpperCase() + string.slice(1)
    )

const countries:string[] = ['Serbia', 'Croatia', 'Bulgaria', 'Greece', 'Montenegro', 'Romania']

export { capitalizeFirstLetter, countries }