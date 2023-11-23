const express = require('express');
var exec = require('child_process').exec;
const app = express();
const port = 8085;

app.get('/', (_req, res) => {
	exec(
		`reg query HKEY_CURRENT_USER\\SOFTWARE\\HWiNFO64\\VSB`,
		function (_error, stdout, _stderror) {
			let data = stdout.replaceAll('REG_SZ', '').split('\r\n').slice(2, -2);
			const propertyCount = 5;
			let json = '{"hwinfo": [';
			for (let i = 0; i < data.length; i += propertyCount) {
				const properties = data.slice(i, i + propertyCount);
				let innerJson = '{';
				properties.forEach(element => {
					const trimmedElement = element
						.trim()
						.replace('        ', ': ')
						.split(': ');
					const key = trimmedElement[0].replace(/[0-9]/g, '');
					const value = trimmedElement[1]
						.replace(' �C', '°C')
						.replace(' %', '%')
						.replace(',', '')
						.replace('.', ',');
					if (element == properties.slice(-1)) {
						innerJson += `"${key}": "${value}"`;
					} else {
						innerJson += `"${key}": "${value}",`;
					}
				});
				if (i == data.length - properties.length) {
					innerJson += '}';
				} else {
					innerJson += '},';
				}
				json += innerJson;
			}
			json += ']}';
			res.status(200).set('Content-Type', 'application/json').send(json);
		}
	);
});

app.get('/kill', (_req, res) => {
	console.log('Application stopped on ' + new Date());
	res.status(200).set('Content-Type', 'text/plain').send('Shutting down application')
	setTimeout(() => process.exit(), 500);
});

app.use((_req, res, next) => {
	res.status(404).send('404 Page Not Found');
});

app.listen(port, function () {
	console.log('Application started on ' + new Date());
	console.log('Listening on ' + port);
});
