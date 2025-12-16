# To use

Run npm install in both front and back folders individually, then:

## How to run

### Front end from frontend root:  
npm run dev  
(port 5173)

### Back end from backend root:  
npm start  
(port 3000)

### Cypress from frontend root:  
npx cypress open

---

# HUOM!

The backend will not work without a URI to a mongodb serve.  
The .env file with mine is NOT part of this repository.

Content of the .env should be:

MONGO_URI=yourMongoDBuri
