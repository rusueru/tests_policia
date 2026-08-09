# CONTEXTO MAESTRO --- PROYECTO TESTS POLICÍA LOCAL

**Versión de contexto:** 9 de agosto de 2026\
**Finalidad:** archivo portátil para recuperar el contexto del proyecto
en un chat nuevo y continuar sin reconstruir las decisiones desde cero.

------------------------------------------------------------------------

## 1. QUÉ ES ESTE PROYECTO

El proyecto nace como una plataforma propia de estudio para preparar la
oposición de **Policía Local**, inicialmente centrada en la **Comunitat
Valenciana**.

La prioridad inmediata no es crear una empresa ni una plataforma
comercial terminada. La prioridad es que el sistema sea realmente útil
para estudiar, hacer muchos tests, detectar fallos y mejorar la
retención.

El desarrollo se está haciendo de forma práctica: construir → probar
estudiando de verdad → detectar problemas → corregir → volver a probar.

El usuario utiliza personalmente los tests desde ordenador y móvil. La
experiencia de poder estudiar fuera de casa desde una URL pública ha
demostrado ser especialmente útil.

A medio/largo plazo existe una segunda dimensión: si el sistema de
aprendizaje funciona claramente mejor que las plataformas tradicionales,
puede convertirse en un **producto comercial para opositores**.

------------------------------------------------------------------------

# 2. VISIÓN DEL PRODUCTO

## 2.1. Problema detectado

Muchas plataformas de test para oposiciones funcionan como bancos
cerrados:

-   Tema → test.
-   Simulacro → test.
-   Aciertos/fallos.
-   Poco más.

El problema detectado es que el alumno genera una enorme cantidad de
información mientras estudia ---qué artículos confunde, qué temas
domina, qué trampas le engañan, qué cifras falla, qué preguntas
repite--- pero las plataformas tradicionales aprovechan poco esa
información.

La visión del proyecto es que el sistema **aprenda del alumno** y adapte
el estudio.

## 2.2. Diferenciación futura

La plataforma ideal debería poder ofrecer:

-   Tests por tema.
-   Repetición de preguntas falladas.
-   Repaso de preguntas no dominadas.
-   Simulacros generales.
-   Simulacros basados en exámenes reales.
-   Simulacros generados aleatoriamente a partir de todos los temas.
-   Tests centrados exclusivamente en artículos.
-   Tests de fechas.
-   Tests de cifras y plazos.
-   Tests de leyes orgánicas y denominaciones.
-   Tests de "trampas del tribunal".
-   Repasos generados a partir del historial personal.
-   Detección de los temas que más cuestan.
-   Detección de conceptos concretos que el alumno confunde.
-   Generación de sesiones de estudio según lo que al alumno le apetezca
    trabajar en ese momento.
-   Estadísticas y evolución del alumno.

La idea central es pasar de un **banco estático de preguntas** a un
**sistema dinámico de aprendizaje**.

------------------------------------------------------------------------

# 3. FILOSOFÍA DE ESTUDIO

La aplicación se está diseñando primero para estudiar de verdad, no para
que parezca una plataforma comercial.

Principios establecidos:

### 3.1. Repetición de fallos

Los errores son información útil.

Una pregunta fallada debe poder volver a aparecer y formar parte del
progreso del alumno. La repetición debe ayudar a convertir fallos en
conceptos dominados.

### 3.2. Explicación inmediata

Después de responder una pregunta debe aparecer una explicación breve y
útil.

No interesa una explicación académica kilométrica. Debe proporcionar el
dato necesario para fijar el concepto en ese momento.

### 3.3. Explicaciones que aprovechan el error

Cuando una pregunta permite una comparación especialmente útil, la
explicación debe aprovecharla.

Ejemplo conceptual:

Si se pregunta qué artículo de la Constitución regula el Ministerio
Fiscal y las opciones son 123, 124, 125 y 126, no basta con:

> Correcta: artículo 124.

Es mejor reforzar:

-   Art. 123 → Tribunal Supremo.
-   Art. 124 → Ministerio Fiscal.
-   Art. 125 → acción popular / participación en la Administración de
    Justicia.
-   Art. 126 → Policía Judicial.

Así, un único fallo produce varios inputs de memoria.

**No es obligatorio hacerlo en todas las preguntas.** Debe utilizarse
cuando realmente aporte valor.

### 3.4. Trampas del tribunal

Cuando los apuntes de la academia indiquen una "trampa del tribunal",
debe aprovecharse.

Idealmente:

-   La respuesta correcta reproduce el dato correcto.
-   Los distractores pueden utilizar las confusiones que el propio
    material advierte.
-   La explicación debe señalar cuál era la trampa.

### 3.5. Datos especialmente preguntables

Priorizar:

-   Artículos.
-   Fechas.
-   Plazos.
-   Mayorías.
-   Porcentajes.
-   Edades.
-   Número de miembros.
-   Penas.
-   Cuantías.
-   Estructuras de leyes.
-   Títulos y capítulos.
-   Leyes orgánicas y fechas.
-   Competencias.
-   Sedes de organismos.
-   Diferencias entre instituciones similares.
-   Excepciones.
-   Palabras que cambian el sentido de una norma.
-   Datos que el material identifique expresamente como importantes o
    trampas.

### 3.6. No inflar tests artificialmente

No hay obligación de producir 100 preguntas por tema.

La cantidad depende del tema.

Si un tema secundario necesita 40--50 preguntas para cubrir lo realmente
preguntable, es preferible un test selectivo de 44 buenas preguntas que
100 preguntas artificiales.

Si un tema es muy importante o contiene mucha literalidad, sí puede
justificarse un test de 90--100 preguntas o más.

------------------------------------------------------------------------

# 4. FUENTE PRINCIPAL: MATERIAL DE LA ACADEMIA

El material proporcionado por el usuario es la base prioritaria para
generar los tests.

Regla importante:

**No corregir silenciosamente el material de la academia con
conocimiento externo.**

Si el usuario entrega un test ya corregido:

-   Respetar las respuestas proporcionadas.
-   Convertirlo al formato de la aplicación.
-   Si una pregunta no tiene respuesta, no inventarla.
-   Si una pregunta abierta trae una respuesta escrita y puede
    convertirse razonablemente a tipo test, puede transformarse
    manteniendo el sentido de la respuesta.
-   Si se detecta un posible error, debe señalarse por separado antes de
    cambiarlo.

Cuando se genere un test desde apuntes:

-   Mantener la terminología del tema.
-   Explotar los "datos clave".
-   Explotar las "trampas del tribunal".
-   Priorizar contenido con probabilidad real de examen.
-   Evitar preguntas irrelevantes únicamente para aumentar el número.

------------------------------------------------------------------------

# 5. ESTRUCTURA GENERAL DEL TEMARIO

La oposición tiene **40 temas**.

Se decidió que la estructura general estuviera preparada desde el
principio para:

``` text
tema01
tema02
tema03
...
tema40
```

No debe ser necesario modificar manualmente el motor general cada vez
que se incorpora un tema.

Dentro de cada tema:

``` text
temas/
└── temaXX/
    ├── index.html
    ├── test01.js
    ├── test02.js
    ├── test03.js
    └── ...
```

Cada tema puede contener tantos tests como sean necesarios.

Nomenclatura:

-   Carpetas: `tema01` ... `tema40`
-   Tests: `test01.js`, `test02.js`, `test03.js`...
-   Cada carpeta tiene su `index.html`.

------------------------------------------------------------------------

# 6. ARQUITECTURA ACTUAL DEL PROYECTO

Estructura conceptual:

``` text
/
├── index.html
├── test.html
├── css/
├── js/
└── temas/
    ├── tema03/
    │   ├── index.html
    │   └── test01.js
    ├── tema05/
    ├── tema08/
    ├── tema10/
    ├── tema12/
    ├── tema14/
    ├── tema15/
    ├── tema16/
    └── ...
```

El motor común debe encargarse de ejecutar los tests.

La filosofía es evitar duplicar lógica innecesariamente dentro de cada
tema.

------------------------------------------------------------------------

# 7. FORMATO DE LOS TESTS

En los tests más recientes se está utilizando una estructura basada en:

``` javascript
window.TEST_THEME = {
  id: "16_01",
  tema: "16",
  test: "01",
  title: "Tema 16 · ...",
  subtitle: "Test 1 · ...",
  questions: [
    {
      q: "Pregunta...",
      o: [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      a: 1,
      e: "Explicación...",
      src: "Referencia...",
      tag: "TRAMPA"
    }
  ]
};
```

Significado:

-   `q` → pregunta.
-   `o` → opciones.
-   `a` → índice de la respuesta correcta, comenzando por 0.
-   `e` → explicación.
-   `src` → fuente/referencia cuando corresponda.
-   `tag` → clasificación como `TRAMPA`, `CLAVE`, etc.

**IMPORTANTE:** antes de generar nuevos archivos, comprobar la última
versión real del motor y de un `testXX.js` que esté funcionando. Si el
código real del proyecto contradice este documento, prevalece el código
actual.

------------------------------------------------------------------------

# 8. INDEX INDIVIDUAL DE CADA TEMA

Cada carpeta `temaXX` tiene un `index.html`.

Su función es presentar los tests disponibles para ese tema.

Ejemplo conceptual:

``` text
Tema 16

Test 1
44 preguntas · Violencia de género y doméstica ·
Orden de protección · LO 1/2004 · Protocolo Cero

[Entrar al test]
```

La ruta utilizada es del tipo:

``` text
../../test.html?tema=16&test=01
```

El progreso se identifica con claves del tipo:

``` text
16_01
```

Debe mantenerse el diseño común del proyecto y evitar crear estilos
diferentes arbitrariamente para cada tema.

------------------------------------------------------------------------

# 9. PROGRESO Y APRENDIZAJE

Actualmente el proyecto utiliza progreso guardado en el navegador.

Conceptualmente se muestran datos como:

``` text
X/Y dominadas · Z fallos acumulados
```

La aplicación está pensada para repetición y aprendizaje, no simplemente
para realizar un examen y olvidar el resultado.

En una fase futura, si existen cuentas de usuario, el progreso debería
sincronizarse entre dispositivos mediante backend/base de datos.

------------------------------------------------------------------------

# 10. DECISIÓN SOBRE METADATOS

En una fase anterior se planteó enriquecer mucho cada pregunta con
metadatos.

Se decidió **no complicar todavía el proyecto con metadatos excesivos**.

Motivo:

-   Es principalmente una herramienta personal de estudio en esta fase.
-   Añadir demasiada estructura consume tiempo.
-   Puede aumentar costes de generación.
-   Todavía estamos descubriendo mediante uso real qué funciones son
    verdaderamente útiles.

La estrategia es:

> Primero crear un estándar sólido de estudio y repetición. Añadir
> sofisticación cuando exista una necesidad real.

------------------------------------------------------------------------

# 11. ESTADO DE ALGUNOS TEMAS TRABAJADOS

Este listado refleja el contexto de esta conversación y debe
contrastarse con los archivos reales del proyecto si se retoma en el
futuro.

### Tema 3

Se trabajó un test y su index.

Contenido relacionado con el Poder Legislativo / Cortes Generales.

### Tema 5

Uno de los primeros temas utilizados para perfeccionar el sistema.

Contenido:

-   Poder Judicial.
-   Tribunal Constitucional.
-   LOPJ.
-   Constitución Española.
-   Título VI CE, arts. 117--127.
-   Título IX.
-   Art. 122 CE → CGPJ.
-   Art. 123 → Tribunal Supremo.
-   Art. 124 → Ministerio Fiscal.
-   Art. 125 → acción popular.
-   Art. 126 → Policía Judicial.
-   Art. 159 → Tribunal Constitucional.
-   Art. 53.2 → recurso de amparo.
-   Ley Orgánica reguladora del TC.
-   Fechas, artículos y trampas.

Este tema ayudó a definir la idea de explicaciones comparativas para
aprender de los distractores.

### Tema 8

Estatuto de Autonomía de la Comunitat Valenciana.

Se trabajó especialmente:

-   Estructura del Estatuto.
-   LO 1/2006, de 10 de abril.
-   Diferenciación con LO 5/1982.
-   Les Corts.
-   Artículos.
-   Mayorías.
-   Instituciones.
-   Cifras.
-   Plazos.
-   Trampas.

Se generó un Test 01 de aproximadamente 100 preguntas y su index.

### Tema 10

Unión Europea.

Se pidió especial énfasis en:

-   Consejo Europeo.
-   Consejo.
-   Diferencias entre ambos.
-   Instituciones.
-   Sedes.
-   Organismos.
-   Europol.
-   Eurojust.
-   Frontex.
-   BCE.
-   TJUE.
-   Tribunal de Cuentas.
-   Parlamento Europeo.
-   Comisión.
-   Ordenamiento jurídico de la UE.

Se generó un Test 01 de 93 preguntas, con fuerte presencia de preguntas
de sedes y trampas, y su index.

### Tema 12

Se convirtió un test de academia ya hecho/corregido a formato de la
aplicación.

Se trabajó su index y la integración del tema en la estructura general.

### Tema 14

Delitos contra el patrimonio y orden socioeconómico.

Se generó un Test 01 de 92 preguntas.

Contenido:

-   Hurtos.
-   Robos.
-   Fuerza.
-   Violencia/intimidación.
-   Extorsión.
-   Robo/hurto de uso de vehículos.
-   Daños.
-   Arts. 268--269.
-   Multirreincidencia.
-   LO 1/2026 según el material aportado.

Se creó su index.

### Tema 15

Delitos contra la Seguridad Vial.

Se recibió un PDF de academia con respuestas.

Se convirtió al formato de la aplicación.

Resultado aproximado: **49 preguntas autocalificables**.

Una pregunta abierta sin respuesta fue omitida para no inventar la
solución.

También se creó el index del Tema 15.

### Tema 16

Violencia doméstica y de género.

Se decidió conscientemente hacer un **repaso selectivo**, porque no es
un tema que normalmente requiera una profundidad extrema pero puede
aparecer alguna pregunta aislada capaz de penalizar mucho.

Se generó un Test 01 de **44 preguntas**.

Se reforzaron:

-   Diferencia violencia doméstica / violencia de género.
-   Relación análoga de afectividad.
-   Arts. 153, 171, 172 y 173 CP.
-   Penas.
-   Privación del derecho a tenencia y porte de armas.
-   Habitualidad.
-   Orden de protección.
-   Art. 544 ter LECrim.
-   LO 1/2004.
-   Derechos y artículos.
-   Protocolo Cero / Instrucción 5/2021.

Se creó su index.

------------------------------------------------------------------------

# 12. FLUJO DE TRABAJO ESTABLECIDO

Para un tema nuevo:

## Caso A --- El usuario aporta apuntes

1.  Leer los apuntes.
2.  Identificar contenido preguntable.
3.  Identificar artículos, cifras, fechas, plazos, mayorías y
    estructuras.
4.  Detectar trampas indicadas por la academia.
5.  Generar preguntas.
6.  Crear explicaciones útiles.
7.  Crear `test01.js`.
8.  Entregar ZIP descargable.
9.  Crear posteriormente `index.html` del tema.
10. El usuario lo prueba estudiando.
11. Corregir o enriquecer preguntas cuando el uso real detecte
    problemas.

## Caso B --- El usuario aporta un test de academia con respuestas

1.  Extraer las preguntas.
2.  Respetar las respuestas proporcionadas.
3.  Convertirlas al formato de la aplicación.
4.  No inventar respuestas ausentes.
5.  Señalar posibles anomalías por separado.
6.  Crear `testXX.js`.
7.  Crear el index si todavía no existe.

------------------------------------------------------------------------

# 13. DESARROLLO LOCAL Y PUBLICACIÓN

El usuario mantiene una carpeta local en Windows con la estructura real
del proyecto.

Preferencia actual:

-   Trabajar y probar localmente.
-   Mantener la carpeta organizada.
-   Cuando existe una versión suficientemente buena, copiar/subir los
    cambios a GitHub.
-   Desde GitHub, desplegar la versión web.

No se quiere depender innecesariamente de editar directamente en
producción.

------------------------------------------------------------------------

# 14. NETLIFY Y COSTES DE DEPLOY

Netlify ha funcionado **muy bien técnicamente**.

El usuario ha podido salir de casa, abrir la plataforma y estudiar desde
el móvil sin problemas. Esa experiencia es un requisito a conservar en
cualquier migración futura.

El problema detectado no fue rendimiento ni estabilidad, sino el modelo
de créditos/deploys.

El flujo de prueba/error implica muchas pequeñas modificaciones:

``` text
cambio
→ prueba
→ error
→ corrección
→ nueva prueba
→ nuevo deploy
```

Ese modelo puede consumir demasiados créditos.

Por eso se planteó migrar más adelante.

------------------------------------------------------------------------

# 15. CLOUDFLARE / FUTURA MIGRACIÓN

Se valoró **Cloudflare Pages** como posible alternativa para la fase
estática.

Motivos conceptuales:

-   Buen encaje con HTML/CSS/JS estático.
-   Integración con GitHub.
-   Despliegue automático.
-   CDN.
-   Mayor margen para iteración.
-   Posibilidad de evolucionar posteriormente hacia servicios backend
    del ecosistema Cloudflare.

No obstante, el principio acordado es:

**Primero seguir produciendo tests y contenido. Migrar después.**

No paralizar el estudio ni la creación de temas por optimizar
prematuramente la infraestructura.

Cuando se migre, debe hacerse sin destruir la versión que ya funciona:
desplegar en paralelo, probar desde ordenador y móvil y solo después
sustituir el sistema anterior.

------------------------------------------------------------------------

# 16. VISIÓN DE ARQUITECTURA A LARGO PLAZO

Si el proyecto se comercializa, no debe escalarse ingenuamente el
prototipo actual.

La futura plataforma probablemente necesitará:

-   Usuarios.
-   Autenticación.
-   Base de datos.
-   Progreso sincronizado.
-   Estadísticas.
-   Historial de preguntas.
-   Motor de recomendación de repaso.
-   Simulacros personalizados.
-   Panel de administración.
-   Pagos.
-   Gestión del banco de preguntas.
-   API/backend.
-   Posible PWA/app móvil.

Principio económico/técnico:

**El coste de infraestructura debe crecer mucho más lentamente que los
ingresos.**

Evitar arquitecturas en las que cada respuesta de un alumno provoque
múltiples operaciones caras innecesarias.

Ejemplo de optimización futura:

-   Agrupar/sincronizar progreso por bloques.
-   Caché.
-   Assets estáticos en CDN.
-   Backend sólo cuando sea necesario.
-   Medir coste por sesión y por alumno.
-   Establecer límites antes de escalar.

Una "app propia" no implica necesariamente empezar por iOS/Android
nativos. Una web app/PWA bien diseñada puede ser una primera plataforma
comercial eficiente.

------------------------------------------------------------------------

# 17. CONTEXTO ECONÓMICO Y EMPRESARIAL

## 17.1. Fase actual

Actualmente el proyecto se trata principalmente como:

**herramienta personal de estudio + validación del concepto.**

Por eso:

-   Mantener costes bajos.
-   No sobreconstruir.
-   Validar mediante uso real.
-   Generar contenido.
-   Descubrir qué funciones aportan realmente valor.

## 17.2. Hipótesis comercial

Existe una posible oportunidad comercial porque la propuesta puede
diferenciarse de plataformas de test tradicionales mediante
personalización y aprendizaje dinámico.

La ventaja no sería únicamente "tener preguntas".

La ventaja sería:

> utilizar el historial del alumno para decidir qué debería estudiar a
> continuación.

## 17.3. Mercado inicial

Mercado inicial considerado:

**opositores a Policía Local en la Comunitat Valenciana.**

Durante la conversación se analizaron cifras de admitidos en diferentes
municipios.

Ejemplos aportados por el usuario como referencia aproximada:

-   Torrevieja: alrededor de 950.
-   Aspe: alrededor de 600.
-   Municipios como Benijófar o Benissa: alrededor de 250 admitidos por
    municipio.

Se detectó inmediatamente un problema metodológico:

**No se pueden sumar los admitidos de todas las convocatorias para
calcular el número de opositores únicos.**

Muchos candidatos se presentan a numerosos municipios.

El propio usuario es ejemplo del fuerte solapamiento entre procesos.

Por tanto, cualquier estimación de mercado debe descontar esa
duplicidad.

En conversaciones previas se manejó como **hipótesis de trabajo, no
cifra oficial**, un orden de magnitud aproximado de unos **5.000
opositores activos en la Comunitat Valenciana**, con un rango
orientativo amplio de aproximadamente **2.500--7.500**.

Esta cifra NO debe presentarse en el futuro como dato oficial. Debe
volver a investigarse si se utiliza para un plan empresarial real.

## 17.4. Expansión horizontal

La Comunitat Valenciana puede ser el mercado inicial, pero el proyecto
puede crecer horizontalmente.

Una expansión especialmente interesante mencionada:

**Andalucía.**

Después podrían incorporarse:

-   Otras comunidades autónomas.
-   Otros cuerpos.
-   Otras oposiciones compatibles con el motor de aprendizaje.

La arquitectura conceptual debe permitir que el sistema de aprendizaje
sea reutilizable aunque cambie el temario.

------------------------------------------------------------------------

# 18. MODELO DE NEGOCIO: IDEAS, NO DECISIONES CERRADAS

Se han explorado cuestiones como:

-   Cobro por suscripción.
-   Número de opositores necesarios.
-   Conversión de usuarios.
-   Coste de infraestructura.
-   Rentabilidad.
-   Escalabilidad.

No existe todavía un precio definitivo ni un modelo comercial cerrado.

Cualquier cifra económica discutida debe considerarse **hipótesis de
trabajo** hasta que se haga un análisis actualizado.

------------------------------------------------------------------------

# 19. AUTÓNOMO / EMPRESA / LLC

Se habló de la futura estructura jurídica del negocio.

Se plantearon:

-   Autónomo en España.
-   Sociedad.
-   LLC en Estados Unidos.
-   Fiscalidad de una LLC para un residente en España.

El usuario comentó haber tenido anteriormente una LLC en Albuquerque y
explicó su experiencia respecto a beneficios no retirados.

**IMPORTANTE PARA FUTUROS CHATS:**

No convertir esa conversación exploratoria en una conclusión fiscal.

La tributación de estructuras extranjeras para residentes fiscales
españoles puede depender de:

-   Residencia fiscal.
-   Clasificación de la entidad.
-   Transparencia fiscal.
-   Dirección efectiva.
-   Actividad.
-   Distribuciones.
-   Convenios.
-   Normativa española vigente.

Antes de tomar decisiones empresariales reales debe verificarse con
normativa vigente y asesoramiento fiscal/profesional.

Este apartado se guarda como **contexto empresarial explorado**, no como
recomendación jurídica.

------------------------------------------------------------------------

# 20. PRINCIPIO ECONÓMICO CENTRAL

Una preocupación importante surgida durante el desarrollo:

> Una plataforma que crece puede convertirse en un problema si los
> costes variables no están controlados.

Por eso, antes de comercializar:

1.  Medir uso real.
2.  Calcular coste por alumno.
3.  Calcular coste por sesión/test.
4.  Separar contenido estático de operaciones de backend.
5.  Minimizar escrituras y funciones innecesarias.
6.  Diseñar límites.
7.  Elegir infraestructura con costes previsibles.
8.  Comprobar que el margen por usuario permite absorber crecimiento.

El objetivo no es simplemente soportar usuarios.

El objetivo es que:

**ingresos crezcan más rápido que costes de infraestructura.**

------------------------------------------------------------------------

# 21. PRINCIPIOS DE DESARROLLO DEL PROYECTO

Cuando se retome el proyecto:

### NO hacer

-   Reescribir todo sin necesidad.
-   Cambiar nomenclaturas arbitrariamente.
-   Crear sistemas complejos antes de necesitarlos.
-   Añadir metadatos porque "podrían servir algún día".
-   Generar preguntas de relleno.
-   Corregir silenciosamente los apuntes del usuario.
-   Cambiar el diseño de cada tema.
-   Romper compatibilidad con tests anteriores.
-   Optimizar infraestructura mientras eso retrase el estudio.

### SÍ hacer

-   Mantener compatibilidad.
-   Generar contenido de calidad.
-   Priorizar el estudio.
-   Probar en local.
-   Hacer cambios incrementales.
-   Utilizar el uso real del alumno para decidir mejoras.
-   Documentar cambios importantes.
-   Pensar desde el principio en que los 40 temas acabarán integrándose.
-   Diseñar futuras funciones alrededor del historial del alumno.

------------------------------------------------------------------------

# 22. FUTURO MOTOR DE SIMULACROS

Una vez exista una base suficiente de temas, el proyecto debería
evolucionar hacia un motor capaz de generar:

### Simulacro general

Preguntas aleatorias de todo el temario.

### Simulacro ponderado

Mayor presencia de temas importantes o frecuentes.

### Simulacro de debilidades

Generado según el historial del alumno.

### Simulacro de errores

Compuesto principalmente por preguntas previamente falladas.

### Simulacro de datos

Artículos + fechas + cifras + plazos + mayorías.

### Simulacro "trampas del tribunal"

Distractores diseñados alrededor de confusiones reales indicadas en los
apuntes.

### Simulacros reales

Reproducción de exámenes oficiales o de academia cuando se disponga de
ellos y sea apropiado.

------------------------------------------------------------------------

# 23. FUTURA BASE DINÁMICA DEL ALUMNO

Una de las ideas con mayor valor del proyecto es construir un perfil
académico dinámico.

Ejemplo conceptual:

``` text
Alumno
├── Tema 5
│   ├── Artículos CE: fuerte
│   ├── CGPJ: medio
│   └── TC / recurso de amparo: débil
├── Tema 10
│   ├── Instituciones UE: fuerte
│   ├── Sedes: medio
│   └── Consejo Europeo vs Consejo: débil
└── Historial
    ├── preguntas falladas
    ├── preguntas dominadas
    ├── reincidencias
    └── evolución temporal
```

Entonces el sistema podría sugerir:

> "Hoy tienes 20 minutos. Repasa 12 preguntas de artículos que estás
> confundiendo."

o:

> "Vamos a hacer un simulacro de 40 preguntas con un 50 % centrado en
> tus debilidades."

Ese dinamismo es una de las principales diferencias potenciales frente a
bancos tradicionales de test.

------------------------------------------------------------------------

# 24. PRIORIDAD ACTUAL

La prioridad al guardar este documento es:

**SEGUIR GENERANDO TESTS E INDEX DE LOS TEMAS.**

No detener el proyecto para construir todavía:

-   Login.
-   Backend.
-   Pagos.
-   Aplicación móvil nativa.
-   Algoritmos complejos.
-   Panel empresarial.

Primero:

``` text
CONTENIDO
+
MOTOR QUE FUNCIONA
+
USO REAL
+
APRENDIZAJE
```

Después:

``` text
OPTIMIZACIÓN
+
MIGRACIÓN
+
PRODUCTO COMERCIAL
```

------------------------------------------------------------------------

# 25. INSTRUCCIONES PARA CHATGPT EN UN CHAT NUEVO

Si este archivo se adjunta a una conversación nueva, ChatGPT debe asumir
lo siguiente:

1.  Este documento resume decisiones tomadas durante un desarrollo real.
2.  No debe comenzar proponiendo una arquitectura completamente
    diferente.
3.  Debe pedir/ver los archivos actuales del proyecto cuando una
    modificación dependa del código real.
4.  El código actual prevalece sobre ejemplos antiguos de este
    documento.
5.  Los tests deben basarse prioritariamente en el material de academia
    aportado por el usuario.
6.  Deben priorizarse trampas, artículos, fechas, cifras, plazos y
    diferencias confundibles.
7.  Las explicaciones deben aprovechar los errores para reforzar
    conceptos relacionados cuando tenga sentido.
8.  No deben inventarse respuestas que no aparezcan en un test corregido
    aportado.
9.  El objetivo inmediato sigue siendo estudiar y completar los temas.
10. La visión comercial debe conservarse, pero no debe interferir
    constantemente con la fase actual.
11. Cuando se entregue un archivo (`testXX.js`, `index.html`, etc.),
    debe entregarse listo para descargar y sustituir/copiar.
12. Mantener la nomenclatura `temaXX` / `testXX.js`.
13. Evitar preguntas de relleno.
14. Un tema secundario puede tener un test selectivo; uno central puede
    tener un banco mucho mayor.
15. Antes de modificar el motor general, revisar los archivos reales
    actuales.
16. No confundir hipótesis económicas con datos oficiales.
17. Las decisiones fiscales/jurídicas exploradas deben verificarse antes
    de actuar.

------------------------------------------------------------------------

# 26. MENSAJE DE REANUDACIÓN RECOMENDADO

En un chat nuevo, adjuntar:

1.  Este archivo.
2.  Preferiblemente un ZIP con la versión actual del proyecto o, como
    mínimo, los archivos que se quieran modificar.
3.  Los apuntes/test del siguiente tema.

Y escribir:

> **"Este es el contexto maestro de mi proyecto de tests para Policía
> Local. Léelo y continúa desde este estado. El código que te adjunto es
> la versión actual y prevalece si existe alguna diferencia con el
> documento. Quiero seguir generando tests e index de los temas con los
> criterios establecidos."**

Con eso debería poder reconstruirse gran parte del contexto operativo
sin volver a explicar toda la conversación.

------------------------------------------------------------------------

# 27. MANTENIMIENTO DE ESTE DOCUMENTO

Este archivo debe actualizarse cuando exista un cambio estructural
importante, por ejemplo:

-   Nuevo formato de `testXX.js`.
-   Cambio del motor de progreso.
-   Migración de hosting.
-   Incorporación de backend.
-   Cambio del modelo de simulacros.
-   Inicio de comercialización.
-   Definición de precios.
-   Expansión a otra comunidad.
-   Cambio de estructura jurídica.
-   Nuevo sistema de personalización.

No hace falta actualizarlo por cada pregunta o cada test nuevo.

La mejor combinación de seguridad es conservar:

``` text
1. Código actual del proyecto
2. CONTEXTO_MAESTRO_PROYECTO.md
3. Material original de la academia
```

El código dice **qué existe**.

El contexto maestro explica **por qué se hizo así y hacia dónde va**.

Los apuntes/test de academia conservan **la fuente académica**.

------------------------------------------------------------------------

# FIN DEL CONTEXTO MAESTRO
