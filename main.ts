input.onGesture(Gesture.Shake, function () {
    roll = randint(0, 5)
    roll = roll + 1
    basic.showNumber(roll)
})
// Dice Roll by Channing H. 05/18/21
let roll = 0
basic.showString("Dice Roll")
