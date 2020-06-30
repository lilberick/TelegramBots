# Telegram Bot Covid  
![](.img/1.png)
## TelegramBot  
1. Para obtener la tabla con la data  
	1. Ejecutamos  
		```
		$ Rscript tabla.R
		```  
	2. Esto genera: csv/datos.csv  
		![](.img/2.png)
2. Para obtener la imagen con los datos de personas fallecidas por coronavirus  
	1. Ejecutamos  
		```
		$ python2.7 mapa.py
		```
	2. Esto genera: img/PeruTemporal.png  
		![](.img/3.png)
3. Para ejecutar el bot  
	1. Ejecutamos  
		```
		$ npm init
		$ npm install --save node-telegram-bot-api
		$ node index.js
		```
	2. Entonces ya podremos consultar al bot  
4. Para interacturar con el bot  
	1. Buscamos en Telegram el bot que ya he creado: covidPeru  
		![](.img/4.png)
	2. Para consultarle la cantidad de muertos por coronavirus escribimos: /muertos  
		![](.img/muertos.png)
	3. Para consultarle la cantidad de casos confirmados de coronavirus escribimos: /confirmados  
		![](.img/confirmados.png)
	4. Para consultarle la población de Perú escribimos: /poblacion  
		![](.img/poblacion.png)
	5. Audio: /audio  
		![](.img/audio.png)
	6. Video: /video  
		![](.img/video.png)
## Coordenadas  
1. Si queremos reubicar los puntos donde se escribirán los números en la imagen  
	```
	$ python3.8 coordenadas.py
	```
	1. Una vez iniciado tenemos que escribir los departamentos del Perú, uno por uno  
		![](.img/6.png)  
		![](.img/7.png)
	2. En la imagen hacemos doble clic en la parte que corresponde al departamento del Perú que escribimos  
		![](.img/8.png)
	3. Hacemos lo mismo para todos los departamentos del Perú  
	4. Para terminar nos ubicamos en la imagen y presionamos: ESC  
	5. Al final obtendremos el archivo con las nuevas coordenadas donde se ubicarán los valores: coordenadas.csv  
		![](.img/9.png)
## Ejecutar el bot en una Raspberry Pi  
![](.img/10.png)
1. Ejecutamos   
	```
	$ sudo crontab -e
	```
2. Pego esto al final para que se ejecute el bot cuando la Raspberry Pi se prende  
	```
	@reboot /usr/bin/node /home/pi/app/TelegramBotCovid/TelegramBot/bot/index.js
	```
	
