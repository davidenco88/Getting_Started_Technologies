### Pasos para configurar proyecto con typescript

1. Instalar typescript - npm i -D typescript

2. Configurar script en el package.josn - "tsc": "npx tsc"

3. Inicializa la configuración de Typescript - npx tsc --init
   Existen varias configuraciones que se pueden activar, importante agregar

   - "Module": "ES2020" --> Para este caso particular se escogio de esta manera para que coincida con la configuración del proyecto - "type": "module"
     para mas detalle se puede consultar en https://www.typescriptlang.org/tsconfig#module
   - "outDir": "./dist"
   - "include": ["./"]
   - "exclude": ["node_modules"]
     Esta configuración es basica para este ejemplo

4. Instalar express, para algunos paquetes que no tienen sus tipos es necesario istalarlos tambien - npm i express - npm i -D @types/express -
   Nota: Existe un repositorio donde se pueden consultar los tipos de miles paquetes
   https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express.

5. Crear una aplicación sencilla con express en el archivo index.ts y ejecutar el comando - npx tsc - para compliar el proyecto en TS. despues de esto se debe crear una carpeta ./dist (o la que se configure)

6. Configura en el package.josn el script "start": "node "./dist/index.js" para correr la aplicación.

7. Hasta este punto ya se tiene una configuración que permite trabajar nuestro proyecto con typescript, compilando con el script tcs y posteriormente iniciando la aplicación con el script start, este proceso debe realizarse
   manualmente cada que se realice un cambio en la aplicación.

##Pasos Opcionales

1. Instalar la dependencia @ts-node-dev con el comando npm i -D ts-node-dev y configurar el script package.json "dev": "ts-node-dev ./index.ts" para ejecutar en modo de desarrollo y que el proyecto se compile y ejecute
   automaticamente cada vez que se realice un cambio.

Videos recomendados donde se explica paso a paso como realizar esta configuración y algunos tips adicionales de Typescript:
https://www.youtube.com/watch?v=ZpY5KdGQvwI&ab_channel=midudev

Notas importantes: Todo lo relacionado con Typescript debe instalarse como dependecias de desarrollo.
