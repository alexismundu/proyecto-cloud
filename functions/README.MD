# Functions

- `notifyUsers (AWS lambda`): Es la función encargada de notificar usuarios sobre las propiedades que tienen por revisar.

- `logs (IBM function)`: Guarda los logs en cloudant que se envían a esta función para mantener un historial de las acciones que se llevan acabo dentro de la aplicación.

## notifyUsers

Así es como luce la tabla de `Properties` que contiene las propiedades de los usuarios, en la que está asociada por medio del `userId`. La propiedad `isReminderOn` nos brinda información si la propiedad debe de ser notificada o no.
![image](https://user-images.githubusercontent.com/76458618/138637997-e7b4eca0-59b8-48c1-bc1b-2ad15e3c05e0.png)

Después de correr la función, podemos ver que se mapean a cada usuario con las propiedades que deben de ser notificadas.
![image](https://user-images.githubusercontent.com/76458618/138638367-3e27e10d-1ad4-42ae-9ee0-209f0e917912.png)

