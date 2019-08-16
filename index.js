// Code your solution here
//i === d.substring(0,2)
function findMatching(drivers,anyDriver) {
    const matchDrivers = drivers.filter(i => {return i.toUpperCase() === anyDriver.toUpperCase()})
    return matchDrivers
}
function fuzzyMatch(drivers,d) {
    const matchDrivers = drivers.filter(i => {return i.startsWith(d)})
    return matchDrivers
}
function matchName(drivers,denote) {
    const matchDrivers = drivers.filter(i => {return i.name === denote})
    return matchDrivers
}

