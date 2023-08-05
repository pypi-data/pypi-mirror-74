# Test-Station Drivers
- A series of hardware drivers used to read informative data and determine the quality of i-con machines. Runs on a raspberry pi which is used as a bus.

## VoltageSensorADS1115
- i2c interface
 
    ```py
    i2c = busio.I2C(board.SCL, board.SDA)
    pin = 0
    sensor = VoltageSensorADS1115(i2c, pin)
    print (sensor.voltage) 
     ```
## VoltageSensorMCP3008
- SPI interface
    ```py
    spi = busio.SPI(clock = board.SCK, 
                    MISO  = board.MISO, 
                    MOSI  = board.MOSI)
    # Create the cs (chip select)
    cs = digitalio.DigitalInOut(board.D5)
    sensor = VoltageSensorMCP3008(spi, cs, 0)
    print (sensor.voltage)
    ```
## PressureSensor5837
- i2c interface
    ```py
    bus = smbus.SMBus(1)
    sensor = PressureSensorMS5837(bus)
    print (sensor.pressure)
    print (sensor.temperature)
    ```
## Relay
- GPIO interface
    ```py
    
    # Set pin to refer to P1 header if not already set
    if GPIO.getmode is not GPIO.BOARD:
        GPIO.setmode(GPIO.BOARD)
        GPIO.setwarnings(False)
    
    pin = 32  # Random pin number
    on = True
    relay = Relay(pin, on)
    print (relay.get_status())
    relay.off()
    print (relay.get_status())
    relay.on()
    print (relay.get_status())
    ```