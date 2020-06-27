from PIL import Image, ImageDraw, ImageFont
import csv
imagen = Image.open('img/Peru.png')
dibujo = ImageDraw.Draw(imagen)
fuente = ImageFont.truetype('FreeMonoBold.ttf', size=20)
color = 'rgb(237, 28, 36)'
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
    dibujo.text((x, y),valor[v], fill=color, font=fuente)
imagen.save('img/PeruTemporal.png')


