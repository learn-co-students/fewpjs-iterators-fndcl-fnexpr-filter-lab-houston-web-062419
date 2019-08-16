// Code your solution here
drivers = []
str = []

function findMatching(drivers, str){
    return drivers.filter(driver => driver == str || driver == str.toLowerCase())
    // console.log(nameMatch)

}

function fuzzyMatch(drivers, str){
    let strLength = str.length
    return drivers.filter(driver => driver.slice(0, strLength) === str)
    // console.log(testing)
}

function matchName(drivers, str){
    return drivers.filter(driver => driver.name === str)
}
