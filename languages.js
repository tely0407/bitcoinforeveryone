<style type="text/css">

label {color: maroon; display:block; padding:5px;}

.Idioma{border: solid 2px Goldenrod ;
  border-radius:25px;
  background-color:Peru;
  float: left;
  margin: 5px;
  box-shadow:5px 5px 10px 2.5px;}
.Idioma:hover{background-color:BurlyWood;
      box-shadow:5px 5px 10px 5px grey;}
</style>
<script type="text/javascript">

        function cambiarAspecto(etiqueta) {
            var elementosObtenidos = document.getElementsByTagName(etiqueta);
            elementosObtenidos[0].style.backgroundColor = '#FF6633';
            elementosObtenidos[1].style.backgroundColor = '#FF9933';
            elementosObtenidos[2].style.backgroundColor = '#FFCC33';
            }

        function cambiarIdioma(elemento)
        {
            var Espa=["Nombre :","Apellidos :","Correo Electronico :"];
            var Ingl=['Name :','Surname :','E-mail :'];
            var i;
            var etiqueObtenidos=document.getElementsByTagName('label');
            var H3Obtenidos=document.getElementsByTagName('h3');
            var divObtenidos=document.getElementsByTagName('div');

            if(elemento == 'ingles')
            {
                 H3Obtenidos[0].firstChild.nodeValue="Traducir"
                 divObtenidos[2].firstChild.nodeValue="-Ingles-"
                 divObtenidos[3].firstChild.nodeValue="-Español-"
                for (i=0; i<=2;i++)
                {
                    etiqueObtenidos[i].firstChild.firstChild.nodeValue=Ingl[i];
                }
             }
            
             if(elemento == 'español')
             {
                 H3Obtenidos[0].firstChild.nodeValue="Translate"
                 divObtenidos[2].firstChild.nodeValue="-English-"
                 divObtenidos[3].firstChild.nodeValue="-Spanish-"
                for (i=0; i<=2;i++)
                {
                    etiqueObtenidos[i].firstChild.firstChild.nodeValue=Espa[i];
                }
            }
        }
        </script>