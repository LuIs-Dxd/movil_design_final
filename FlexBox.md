FlexBox Froggy
![imagen](https://github.com/LuIs-Dxd/movil_design_final/assets/45068622/de5cb53f-adc6-46be-b290-36cd519f0ef3)


Mi nivel favorito: 24 - Trae a las ranas a su casa una vez más usando las propiedades CSS que aprendiste
    justify-content
    align-items
    flex-direction
    order
    align-self
    flex-wrap
    flex-flow
    align-content
Ya que no te recuerdan los flex-flow:column-reverse y tardas como 5m en recordarlos xD

# Layout con Flexbox

Un componente puede definir el diseño de sus hijos utilizando el algoritmo de Flexbox. Flexbox está diseñado para proporcionar un diseño consistente en diferentes tamaños de pantalla.

Normalmente, se utiliza una combinación de flexDirection, alignItems y justifyContent para lograr el diseño correcto.
Flex

La propiedad "flex" define cómo los elementos ocuparán el espacio disponible a lo largo de su eje principal. El espacio se dividirá según la propiedad "flex" de cada elemento.

En el siguiente ejemplo, las vistas roja, naranja y verde son hijos de la vista contenedora con "flex: 1". La vista roja usa "flex: 1", la naranja usa "flex: 2" y la verde usa "flex: 3". 1+2+3 = 6, lo que significa que la vista roja ocupará 1/6 del espacio, la naranja 2/6 y la verde 3/6.
Dirección Flex

La propiedad "flexDirection" controla la dirección en la que se disponen los hijos de un nodo. Esto también se conoce como el eje principal. El eje cruzado es el eje perpendicular al eje principal, o el eje en el que se disponen las líneas de envoltura.

    column (valor predeterminado): alinea los hijos de arriba a abajo. Si la envoltura está habilitada, la siguiente línea comenzará a la derecha del primer elemento en la parte superior del contenedor.

    row: alinea los hijos de izquierda a derecha. Si la envoltura está habilitada, la siguiente línea comenzará debajo del primer elemento a la izquierda del contenedor.

    column-reverse: alinea los hijos de abajo a arriba. Si la envoltura está habilitada, la siguiente línea comenzará a la derecha del primer elemento en la parte inferior del contenedor.

    row-reverse: alinea los hijos de derecha a izquierda. Si la envoltura está habilitada, la siguiente línea comenzará debajo del primer elemento a la derecha del contenedor.

## Dirección del Diseño

La dirección del diseño especifica la dirección en la que deben disponerse los hijos y el texto en una jerarquía. También afecta a qué se refieren los términos "start" y "end". Por defecto, React Native utiliza una dirección de diseño de izquierda a derecha (LTR). En este modo, "start" se refiere a la izquierda y "end" a la derecha.

    LTR (valor predeterminado): el texto y los hijos se disponen de izquierda a derecha. El margen y el padding aplicados al inicio de un elemento se aplican en el lado izquierdo.

    RTL: el texto y los hijos se disponen de derecha a izquierda. El margen y el padding aplicados al inicio de un elemento se aplican en el lado derecho.

### Justify Content

La propiedad "justifyContent" describe cómo alinear a los hijos a lo largo del eje principal de su contenedor. Por ejemplo, puedes usar esta propiedad para centrar horizontalmente a un hijo dentro de un contenedor con "flexDirection" establecido como "row" o verticalmente dentro de un contenedor con "flexDirection" establecido como "column".

    flex-start (valor predeterminado): alinea los hijos de un contenedor al comienzo del eje principal del contenedor.

    flex-end: alinea los hijos de un contenedor al final del eje principal del contenedor.

    center: alinea los hijos de un contenedor en el centro del eje principal del contenedor.

    space-between: distribuye uniformemente a los hijos a lo largo del eje principal del contenedor, distribuyendo el espacio restante entre los hijos.

    space-around: distribuye uniformemente a los hijos a lo largo del eje principal del contenedor, distribuyendo el espacio restante alrededor de los hijos. A diferencia de "space-between", "space-around" distribuirá espacio al principio del primer hijo y al final del último hijo.

    space-evenly: distribuye uniformemente a los hijos dentro del contenedor de alineación a lo largo del eje principal. El espacio entre cada par de elementos adyacentes, el borde principal de inicio y el primer elemento, y el borde principal de fin y el último elemento, son todos exactamente iguales.

### Align Items

La propiedad "alignItems" describe cómo alinear a los hijos a lo largo del eje cruzado de su contenedor. Es muy similar a "justifyContent", pero en lugar de aplicarse al eje principal, "alignItems" se aplica al eje cruzado.

    stretch (valor predeterminado): estira los hijos de un contenedor para que coincidan con la altura del eje cruzado del contenedor.

    flex-start: alinea los hijos de un contenedor al comienzo del eje cruzado del contenedor.

    flex-end: alinea los hijos de un contenedor al final del eje cruzado del contenedor.

    center: alinea los hijos de un contenedor en el centro del eje cruzado del contenedor.

    baseline: alinea los hijos de un contenedor a lo largo de una línea base común. Los hijos individuales pueden establecerse como la línea base de referencia para sus padres.

### Align Self

"alignSelf" tiene las mismas opciones y efectos que "alignItems", pero en lugar de afectar a los hijos dentro de un contenedor, puedes aplicar esta propiedad a un solo hijo para cambiar su alineación dentro de su padre. "alignSelf" anula cualquier opción establecida por el padre con "alignItems".
Align Content

"alignContent" define la distribución de las líneas a lo largo del eje cruzado. Esto solo tiene efecto cuando los elementos se envuelven en varias líneas mediante "flexWrap".

    flex-start (valor predeterminado): alinea las líneas envueltas al comienzo del eje cruzado del contenedor.

    flex-end: alinea las líneas envueltas al final del eje cruzado del contenedor.

    stretch (valor predeterminado cuando se usa Yoga en la web): estira las líneas envueltas para que coincidan con la altura del eje cruzado del contenedor.

    center: alinea las líneas envueltas en el centro del eje cruzado del contenedor.

    space-between: distribuye uniformemente las líneas envueltas a lo largo del eje cruzado del contenedor, distribuyendo el espacio restante entre las líneas.

    space-around: distribuye uniformemente las líneas envueltas a lo largo del eje cruzado del contenedor, distribuyendo el espacio restante alrededor de las líneas. A diferencia de "space-between", "space-around" distribuirá espacio al principio de la primera línea y al final de la última línea.

### Flex Wrap

La propiedad "flexWrap" se establece en los contenedores y controla lo que sucede cuando los hijos superan el tamaño del contenedor a lo largo del eje principal. Por defecto, los hijos se ajustan en una sola línea (que puede hacer que los elementos se reduzcan). Si se permite la envoltura, los elementos se envuelven en múltiples líneas a lo largo del eje principal si es necesario.
Flex Basis, Grow y Shrink

    "flexBasis" es una forma independiente del eje para proporcionar el tamaño predeterminado de un elemento a lo largo del eje principal. Configurar "flexBasis" de un hijo es similar a establecer el ancho de ese hijo si su padre es un contenedor con "flexDirection: row" o establecer la altura de un hijo si su padre es un contenedor con "flexDirection: column". "flexBasis" de un elemento es el tamaño predeterminado de ese elemento, el tamaño del elemento antes de realizar cálculos de "flexGrow" y "flexShrink".

    "flexGrow" describe cuánto espacio debe distribuirse entre los hijos de un contenedor a lo largo del eje principal. Después de disponer a sus hijos, un contenedor distribuirá cualquier espacio restante según los valores de "flexGrow" especificados por sus hijos.

    "flexShrink" describe cómo contraer a los hijos a lo largo del eje principal en caso de que el tamaño total de los hijos supere el tamaño del contenedor en el eje principal. "flexShrink" es muy similar a "flexGrow" y se puede pensar de la misma manera si se considera que cualquier tamaño excedente se considera espacio negativo restante. Estas dos propiedades también funcionan bien juntas al permitir que los hijos crezcan y se encojan según sea necesario.

### Ancho y Altura

La propiedad "width" especifica el ancho del área de contenido de un elemento. De manera similar, la propiedad "height" especifica la altura del área de contenido de un elemento.

Tanto "width" como "height" pueden tener los siguientes valores:

    "auto" (valor predeterminado): React Native calcula el ancho/alto para el elemento en función de su contenido, ya sea otros hijos, texto o una imagen.

    Píxeles: define el ancho/alto en píxeles absolutos. Dependiendo de otros estilos establecidos en el componente, esto puede o no ser la dimensión final del nodo.

    Porcentaje: define el ancho o la altura en porcentaje del ancho o la altura del padre, respectivamente.

### Diseño Absoluto y Relativo

El tipo de posición de un elemento define cómo se posiciona dentro de su padre.

    "relative" (valor predeterminado): por defecto, un elemento se posiciona de manera relativa. Esto significa que un elemento se posiciona de acuerdo al flujo normal del diseño, y luego se desplaza en relación a esa posición según los valores de arriba, derecha, abajo e izquierda. El desplazamiento no afecta la posición de ningún otro elemento hermano o padre.

    "absolute": cuando se posiciona de manera absoluta, un elemento no participa en el flujo normal del diseño. En cambio, se dispone de manera independiente a sus elementos hermanos. La posición se determina en función de los valores de arriba, derecha, abajo e izquierda.
