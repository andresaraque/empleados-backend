# Empleados Back-end Node.js
Backend con node.js Api REST CRUD

## Dependencias Usadas
1. cors, version: 2.8.5
2. dotenv, version: 8.2.0
3. express, version: 4.17.1
4. mssql, version: 6.2.3
## Dependencias de Desarrollo Usadas
1. Nodemon, version: 2.0.4

## Prerrequisito
Tener instalado sql Server o visita: [SQL Server](https://www.microsoft.com/es-es/sql-server/sql-server-downloads) Para descargarlo

## Para iniciar
1. Recuerda ejecutar
    ```
    npm install
    ```
2. Crea la base de datos en sql server con el script que esta en: _"database/database.sql"_
3. Cambia las variables de entorno en el archivo _".env"_
4. Ejecuta y monitorea los cambios con el siguiente script
    ```
    npm run start:dev
    ```
5. consulta http://localhost:3200/api/ si no cambiaste el puerto en el archivo .env (_PORT=3200_)





