basic.showString("Hello!")
basic.clearScreen()
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
