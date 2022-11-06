let M = 0
let B = 0
basic.forever(function () {
    M = pins.digitalReadPin(DigitalPin.P0)
    if (M == 1) {
        B += 1
        basic.showNumber(B)
    } else {
        basic.showNumber(B)
    }
})
