# Introducción
Esta aplicación es para poder llevar aun mejor manejo de propiedades inmobiliarias, principalmente enfocado en agentes inmobiliarios, donde puedan tomar una foto de la propiedad que quiere investigar y ahí se van agregando los detalles de esta.

# Arquitectura
![ArquitecturaTecnología drawio](https://user-images.githubusercontent.com/76458618/138642739-b52b3d4e-db6c-4fdb-a8d1-8664c80728f5.png)

#Inicio
+ `cd frontend`
+ `npm i` 
+ `npm start` 
+ Con esto ya se va a poder iniciar la UI

## Functions
Son todas las funciones que hemos implementado para poder auxiliar la aplicación en ciertas funciones. Por el momento tenemos en AWS e IBM cloud.

## AWS DynamoDB
![image](https://user-images.githubusercontent.com/76458618/138644582-f590ed77-ff7f-4122-8097-7226efc1d5b7.png)

Tenemos dos tablas que son las principales y contienen toda la información vital para las funcionalidades de la aplicación, las cuales son:
+ `Users`: tiene toda la información sobre los usuarios.

![image](https://user-images.githubusercontent.com/76458618/138644796-4f6fed94-5716-4dab-b25d-8c4e4dff5bc2.png)

+ `Properties`: contiene los datos de las propiedades que los usuarios van agregando por medio de la aplicación.

![image](https://user-images.githubusercontent.com/76458618/138645045-31072743-2893-4252-89de-0f4f8011d435.png)

## Frontend
Incluye la UI de la aplicación y está está diseñada para mobile first.
