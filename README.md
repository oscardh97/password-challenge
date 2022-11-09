
This project is based on Node with Express JS as a framework. Since the project does not use a database a json file is working as main storage.

**Assumptions**

- No login flow was needed: I assume this since this will require more time to develop and also all the endpoints will required authentication.

- Passwords are not being encrypted: Since it's just a demo I decided to don't encrypt the passwords to save time but in case it was needed there are many libraries to encrypt and decrypt passwords.

**Limitations**

- Not using a normal database: I had to create an ORM for my JSON file that is working as my database.

**Available Scripts**

- `npm start`

- `npm run dev`

**Bonus Points**

- I created a Postman collection to test all the endpoints. A QA engineer could create an automation flow in postman to test all the endpoints.

- All the functions are small and they are simple so Unit test wouldn't be difficult to implement

**Technical Dependencies and Libraries**

- Express JS

- Jsonschema; for schema validations

- UUID: To manage the unique ID in my database

- Visual Studio Code

- Git

- Postman

**Endpoints List**

## **List/Get (GET)**

`/api/password-cards/`

Query params:

filter: string (optional)`


## Create (POST):

 `/api/password-cards/`

Body:

    - name: string (required)
    
    - url: string (required)
    
    - username: string (required)
    
    - password: string (required)

## Update (PUT)

`/api/password-cards/:id`

Body:

    - name: string (optional)
    
    - url: string (optional)
    
    - username: string (optional)
    
    - password: string (optional)

## -Delete (DELETE):

`/api/password-cards/:id`