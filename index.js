function findMatching(drivers, name) {
	return drivers.filter( d => {
		return d.toLowerCase() === name.toLowerCase()
	})
}
function fuzzyMatch(drivers, str) {
	return drivers.filter( d => {
		return d.startsWith(str)
	})
}
function matchName(drivers, name) {
	return drivers.filter( d => {
	return d.name.toLowerCase() === name.toLowerCase()
	}
)}