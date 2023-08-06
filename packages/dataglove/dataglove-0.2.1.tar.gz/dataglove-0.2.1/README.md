# BeBop Sensors Forte Data Glove
## 64-bit Python Module of the DataGlove API

### Prerequisite:
64-bit version of Python

### Simple Setup:

```python
from dataglove import *

leftHand = Forte_CreateDataGloveIO(1, "") # 0 for right-handed glove
try:
	while True:
		try:
			sensors = Forte_GetSensors(leftHand)
			imu = Forte_GetIMU(leftHand)
			print(sensors)
			print(imu)
		except(GloveDisconnectedException):
			print("Glove is Disconnected")
			pass
except(KeyboardInterrupt):
	Forte_DestroyDataGloveIO(leftHand)
	exit()
```

#### Core API Functions
* Forte_CreateDataGloveIO(handType, bleScanName)
* Forte_DestroyDataGloveIO(dataGloveIO)
* Forte_GetIMU(dataGloveIO)
* Forte_GetSensors(dataGloveIO)
* Forte_GetBatteryLevel(dataGloveIO)
* Forte_GetConnectionState(dataGloveIO)
* Forte_GetHandType(dataGloveIO)
* Forte_UploadFile(dataGloveIO, filePath, slot)
* Forte_EnterBootloaderMode(dataGloveIO)
* Forte_SetGloveDisplayID(dataGloveIO)
* Forte_GetFullReport(dataGloveIO)

#### Raw Sensors/Fingers Functions
* Forte_GetSensorRaw(dataGloveIO, index)
* Forte_GetSensorsRaw(dataGloveIO)
* Forte_GetFingerRaw(dataGloveIO, index)
* Forte_GetFingersRaw(dataGloveIO)

#### Normalized Sensors/Fingers Functions
* Forte_GetSensorNormalized(dataGloveIO, index)
* Forte_GetSensorsNormalized(dataGloveIO)
* Forte_GetFingerNormalized(dataGloveIO, index)
* Forte_GetFingersNormalized(dataGloveIO)

#### Raw/Normalized Finger Sum Functions
* Forte_GetFingersSumRaw(dataGloveIO)
* Forte_GetFingersSumNormalized(dataGloveIO)

#### Haptics Functions
* Forte_SendHaptic(dataGloveIO, actuatorID, note, amplitude)
* Forte_SendOneShotHaptic(dataGloveIO, actuatorID, note, amplitude)
* Forte_SendLoopHaptic(dataGloveIO, actuatorID, note, amplitude)
* Forte_ToggleOneShot(dataGloveIO, actuatorID, makeOneShot)
* Forte_SelectHapticWave(dataGloveIO, actuatorID, waveform)
* Forte_SetGrainLocation(dataGloveIO, actuatorID, location)
* Forte_SetAmplitude(dataGloveIO, actuatorID, amplitude)
* Forte_SetPitchBend(dataGloveIO, actuatorID, pitch)
* Forte_SetGrainSize(dataGloveIO, actuatorID, size)
* Forte_SetGrainFade(dataGloveIO, actuatorID, fade)
* Forte_ToggleHapticsOn(dataGloveIO, turnOn)
* Forte_SilenceHaptics(dataGloveIO)

#### Calibration Functions
* Forte_CalibrateFlat(dataGloveIO)
* Forte_CalibrateFingersIn(dataGloveIO)
* Forte_CalibrateThumbIn(dataGloveIO)
* Forte_LoadCalibration(dataGloveIO, slot)
* Forte_SaveCalibration(dataGloveIO, slot)
* Forte_ResetCalibration(dataGloveIO)

#### Device Info Functions
* Forte_GetHardwareRev(dataGloveIO)
* Forte_GetHardwareVersion(dataGloveIO)
* Forte_GetSAMDBootloaderVersion(dataGloveIO)
* Forte_GetSAMDAppletVersion(dataGloveIO)
* Forte_GetBLESoftDeviceVersion(dataGloveIO)
* Forte_GetBLEBootloaderVersion(dataGloveIO)
* Forte_GetBLEAppletVersion(dataGloveIO)

#### Conversion and Rotation Functions
* Forte_HomeIMU(dataGloveIO)
* Forte_GetQuaternionRaw(dataGloveIO)
* Forte_GetQuaternionNormalized(dataGloveIO)
* Forte_GetEulerAngles(dataGloveIO)
* Forte_GetAxisAngle(dataGloveIO)
* Forte_GetRotationMatrix(dataGloveIO)
* Forte_GetSphericalCoordinates(dataGloveIO)
