# Evomo Python

This is a Python library to simplify the connection to Evomo IoT Platform. For more information about the platform itself, please visit the https://evomo.jeager.io.  

## Installation
Make sure you have Python (2 or 3) and pip installed.
```
pip install evomo-mqtt
```

### Usage Example
#### Send data
```python
from evomo_mqtt import evomo

myData = {
    'T' : 77,
    'H' : 10
}

evomo.send(myData, 'your-client-id', 'your-device-id')
```

### API Reference

* `get(clientID, deviceID)`  
    Get the latest data from your Evomo device.  
    return: latest data (json)  

