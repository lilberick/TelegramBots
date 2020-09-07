import numpy as np
import cv2 as cv
def coordenadas():
    archi=open('coordenadas.csv','w')
    archi.write('Departamento,EjeX,EjeY\n')
    archi.close()
coordenadas()
def draw_circle(event,x,y,flags,param):
    if event == cv.EVENT_LBUTTONDBLCLK:
        cv.circle(img,(x,y),5,(255,0,0),-1)
        nombre = input("departamento: ")
        print (nombre," x=",x," y=",y)
        archi=open('coordenadas.csv','a')
        archi.write(nombre+","+str(x)+","+str(y)+"\n")
        archi.close()
img=cv.imread("Peru.png")
cv.namedWindow('image')
cv.setMouseCallback('image',draw_circle)
while(1):
    cv.imshow('image',img)
    if cv.waitKey(20) & 0xFF == 27:
        break
cv.destroyAllWindows()
