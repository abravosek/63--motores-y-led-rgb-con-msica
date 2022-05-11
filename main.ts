let strip: neopixel.Strip = null
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    while (true) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        music.playMelody("C5 - C5 - C5 - C5 - ", 99)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(1000)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        music.playMelody("C5 - C5 - C5 - C5 - ", 99)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(2000)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
