const buyClay = () => {
    const buyClayObject = {}

    return buyClayObject
}

let clay = buyClay()
console.log(clay)

const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"

    return clayObject
}

let clayWithShape = makePottery(clay)
console.log(clayWithShape)

const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true

    return clayObject
}

let clayBisqueFire = bisqueFire(clayWithShape)
console.log(clayBisqueFire)

const glazePottery = (clayObject) => {
    if (clayObject.readyForGlazing === true) {
        clayObject.glazing = "Midnight Blue"
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    return clayObject
}

let clayGlazing = glazePottery(clayBisqueFire)
console.log(clayGlazing)

const finalFiring = (clayObject, tempOfKiln) => {
    if (tempOfKiln > 1200 === true) {
        clayObject.cracked = true
    } else {
        clayObject.cracked = false 
    }
    return clayObject
}

let clayFinalFiring1400 = finalFiring(clayGlazing, 1400)
console.log(clayFinalFiring1400)

let clayFinalFiring1200 = finalFiring(clayGlazing, 1200)
console.log(clayFinalFiring1200)