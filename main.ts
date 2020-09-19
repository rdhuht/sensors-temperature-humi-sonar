let dist = 0
let hum = 0
let temp = 0
let obstacleBoolean = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P2,
true,
false,
true
)
basic.forever(function () {
    obstacleBoolean = pins.digitalReadPin(DigitalPin.P1)
    temp = dht11_dht22.readData(dataType.temperature)
    hum = dht11_dht22.readData(dataType.humidity)
    dist = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    serial.writeLine("" + (dist))
})
