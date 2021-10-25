# Functions

- `notifyUsers (AWS lambda`): Es la función encargada de notificar usuarios sobre las propiedades que tienen por revisar.
- `dispatchEmail (AWS lambda`): Es la función encargada de despachar los correos que se tienen que enviar.
- `guardarLog (IBM function)`: Guarda los logs en cloudant que se envían a esta función para mantener un historial de las acciones que se llevan acabo dentro de la aplicación.


## notifyUsers

Así es como luce la tabla de `Properties` que contiene las propiedades de los usuarios, en la que está asociada por medio del `userId`. La propiedad `isReminderOn` nos brinda información si la propiedad debe de ser notificada o no.
![image](https://user-images.githubusercontent.com/76458618/138637997-e7b4eca0-59b8-48c1-bc1b-2ad15e3c05e0.png)

Después de correr la función, podemos ver que se mapean a cada usuario con las propiedades que deben de ser notificadas.
![image](https://user-images.githubusercontent.com/76458618/138638367-3e27e10d-1ad4-42ae-9ee0-209f0e917912.png)

PD: Esta función se planeaba activar usando EventBridge de AWS para que por medio de un cron, se active cada día, el problema es que con la cuenta de AWS educate no se podía ya que requiere ciertos permisos. (Preguntaremos en clase para una posible solución)

## dispatchEmail

Se encarga de enviar los correos por medio de la integración con sendgrid, esta función es activada al momento en el que se ingresa un nuevo mensaje a la AWS Simple Queue que tenemos a la cual se le envían los mensajes desde notifyUsers.

Falta de implementar ya que es más compleja de lo que creímos y vamos a preguntar en clase sobre esto.

```
Edit
```
