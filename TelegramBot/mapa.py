from PIL import Image, ImageDraw, ImageFont
import csv
#color = 'rgb(237, 28, 36)'
color = 'rgb(9,9,255)'
fuente = ImageFont.truetype('FreeMonoBold.ttf', size=20)
#Muertos
imagen = Image.open('img/Peru.png')
dibujo = ImageDraw.Draw(imagen)
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    ejex = {rows[0]:rows[1] for rows in reader}
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    ejey = {rows[0]:rows[2] for rows in reader}
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    valor = {rows[0]:rows[6] for rows in reader}
for (i,j,v) in zip(ejex,ejey,valor):
    (x,y) = (int(ejex[i]),int(ejey[j]))
    valor[v] = ''.join(valor[v].split('\xa0'))#Quitar espacio
    dibujo.text((x, y),valor[v], fill=color, font=fuente)
    dibujo.text((x, y),valor[v], fill=color, font=fuente)
dibujo.text((10,695),('TOTAL MUERTOS ='), fill=color, font=fuente)
imagen.save('img/Muertos.png')

#Confirmados
imagen = Image.open('img/Peru.png')
dibujo = ImageDraw.Draw(imagen)
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    ejex = {rows[0]:rows[1] for rows in reader}
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    ejey = {rows[0]:rows[2] for rows in reader}
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    valor = {rows[0]:rows[5] for rows in reader}
for (i,j,v) in zip(ejex,ejey,valor):
    (x,y) = (int(ejex[i]),int(ejey[j]))
    valor[v] = ''.join(valor[v].split('\xa0'))#Quitar espacio
    dibujo.text((x, y),valor[v], fill=color, font=fuente)
dibujo.text((10,695),('TOTAL CONFIRMADOS='), fill=color, font=fuente)
imagen.save('img/Confirmados.png')

#Poblacion
imagen = Image.open('img/Peru.png')
dibujo = ImageDraw.Draw(imagen)
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    ejex = {rows[0]:rows[1] for rows in reader}
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    ejey = {rows[0]:rows[2] for rows in reader}
with open('csv/datos.csv', mode='r') as infile:
    reader = csv.reader(infile)
    valor = {rows[0]:rows[4] for rows in reader}
for (i,j,v) in zip(ejex,ejey,valor):
    (x,y) = (int(ejex[i]),int(ejey[j]))
    valor[v] = ''.join(valor[v].split('\xa0'))#Quitar espacio
    dibujo.text((x, y),valor[v], fill=color, font=fuente)
#dibujo.text((10,10),'Actualizado al 00:00 horas', fill=color, font=fuente)
dibujo.text((10,695),('TOTAL POBLACION ='), fill=color, font=fuente)
imagen.save('img/Poblacion.png')
