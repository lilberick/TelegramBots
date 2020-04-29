library(rvest)
url <- "https://es.wikipedia.org/wiki/Pandemia_de_enfermedad_por_coronavirus_de_2020_en_Per%C3%BA"
pagina_web <- read_html(url)
class(pagina_web)
selector <- "#mw-content-text > div > table:nth-child(104)"
nodo <- html_node(pagina_web,selector)
nodo_tabla <- html_table(nodo)
guardar <- nodo_tabla[1:25,1:3]
a <- read.csv("csv/coordenadas.csv")
guardar <- data.frame(a,guardar)
#write.csv(guardar,"datos.csv",row.names=F)
write.table(guardar,"csv/datos.csv",sep=",",row.names=F,col.names=F)
guardar
