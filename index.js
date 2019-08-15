// drivers = [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ]

function findMatching(drivers, string) {
    let match = drivers.filter((driver) => driver.toLowerCase() == string.toLowerCase())

    return match
}

function fuzzyMatch (drivers, string) {
    let matched = drivers.filter((driver) => driver.includes(string))
    let correctMatch = matched.filter((name) => name.startsWith(string))

    return correctMatch
}

function matchName(drivers, string) {
    let match = drivers.filter((driver) => driver.name == string)

    return match
}

