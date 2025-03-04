##  **Defination of Middleware**

Middleware is Express.js a function that executed during the request-response cycle. It has access to the **Request Object** ('req'), the **Response Object** ('res'), and the **next middleware function** in the pipeline. Middleware functions can be used to;

1. Execute code.
2. modify the request response object.
3. End the request-reesponse cycle.
4. passs control through the next middleware.

In simple terms, middle ware acts as abridge that process request before they rech the final route handler ofr after the response is send back.

## **key Features of middleware**
1.Middleware can be apply **globally** or to specific routes.
2. They can perform **login** and **authentication** , **error handeling**, etc .
3.Middleware functions are executed in the order they are defined in the code