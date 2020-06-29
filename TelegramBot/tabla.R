library(rvest)
url <- "https://es.wikipedia.org/wiki/Pandemia_de_enfermedad_por_coronavirus_de_2020_en_Per%C3%BA"
pagina_web <- read_html(url)
selector <- "#mw-content-text > div > table:nth-child(108)"
nodo <- html_node(pagina_web,selector)
nodo_tabla <- html_table(nodo,fill=TRUE)
extraido <- nodo_tabla[3:28,1:8]
extraido<-subset(extraido, select = c(1,2,3,5,8))
colnames(extraido)<-c("Departamentos","Poblacion","Confirmados","MuertesMinsa","MuertesDiresa")
extraido$Departamentos<-chartr("ÁÉÍÓÚ", "AEIOU", toupper(extraido$Departamentos))
a <- read.csv("csv/coordenadas.csv")
a$Departamento<-chartr("ÁÉÍÓÚ", "AEIOU", toupper(a$Departamento))
extraido<-extraido[match(a$Departamento, extraido$Departamentos),]
guardar <- data.frame(a,extraido)
guardar
#write.csv(guardar,"datos.csv",row.names=F)
write.table(guardar,"csv/datos.csv",sep=",",row.names=F,col.names=F)#usar este
