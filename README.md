# HWiNFO-web-server

## Usage

If you have added some sensors to the HWiNFO gadget and only want to use those values for your dashboard (for example in Home Assistant), you can use this application. It will simply output JSON which you can use how you see fit.

Example output:
```json
{
	"hwinfo": [
		{
			"Sensor": "System",
			"Label": "RAM Load",
			"Value": "45,8%",
			"ValueRaw": "45,8",
			"Color": "0000ff"
		},
		{
			"Sensor": "CPU [#0]",
			"Label": "Total CPU Usage",
			"Value": "6,9%",
			"ValueRaw": "6,9",
			"Color": "400040"
		},
		{
			"Sensor": "CPU [#0]",
			"Label": "CPU Temperature",
			"Value": "50,6°C",
			"ValueRaw": "50,6",
			"Color": "400040"
		},
		{
			"Sensor": "MSI B550 GAMING GEN3 (MS-7B86) (Nuvoton NCT6797D)",
			"Label": "CPU Fan",
			"Value": "1735 RPM",
			"ValueRaw": "1735",
			"Color": "408080"
		},
		{
			"Sensor": "MSI B550 GAMING GEN3 (MS-7B86) (Nuvoton NCT6797D)",
			"Label": "SYS Fan 2",
			"Value": "812 RPM",
			"ValueRaw": "812",
			"Color": "800040"
		},
		{
			"Sensor": "MSI B550 GAMING GEN3 (MS-7B86) (Nuvoton NCT6797D)",
			"Label": "SYS Fan 3",
			"Value": "820 RPM",
			"ValueRaw": "820",
			"Color": "800000"
		},
		{
			"Sensor": "GPU [#0]",
			"Label": "GPU Temperature",
			"Value": "41,7°C",
			"ValueRaw": "41,7",
			"Color": "408080"
		},
		{
			"Sensor": "GPU [#0]",
			"Label": "GPU Fan",
			"Value": "0 RPM",
			"ValueRaw": "0",
			"Color": "0080c0"
		},
		{
			"Sensor": "GPU [#0]",
			"Label": "GPU Usage",
			"Value": "2,0%",
			"ValueRaw": "2,0",
			"Color": "004000"
		},
		{
			"Sensor": "MSI B550 GAMING GEN3 (MS-7B86) (Nuvoton NCT6797D)",
			"Label": "SYS Fan 1",
			"Value": "1351 RPM",
			"ValueRaw": "1351",
			"Color": "004080"
		}
	]
}
```

## How to start

Make sure HWiNFO is running before you start the application. You can start the application by running the .vbs script or by running node server.js. If you want to start this application on startup, you can also use the .vbs script.
