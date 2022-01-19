# shopify-backend-challenge

### Back-End Technologies: Node, Express, MongoDB Atlas, Heroku
### Front-End Technologies: React, TypeScript, TailwindCSS, Netlify

## Web Application
* Shows GET and DELETE methods
* Can query by IKEA Sofa Family Type
* Note: Heroku free tier sometimes takes ~10s to start up (that is why I hosted the front-end on Netlify)


## API
* Can try POST and PUT requests
* Hosted on Heroku
* Note: Heroku free tier sometimes takes ~10s to start up 

## API Docs
### Base URL is https://shopify-challenge-backend-ilya.herokuapp.com/

#### GET products/all
* Returns all products

#### GET products/<IKEA_family_type>
* Returns all products in the specified IKEA family type

#### POST products/
* All fields are required
* sku and name must be unique
* JSON body must be in following form
```json
{
    "sku": "00000001",
    "name": "HARLANDA Sofa",
    "family": "HARLANDA",
    "description": "Sofa is part of IKEA HARLANDA family",
    "quantity": 10
}
```

#### PUT products/sku
* Updates product by sku (you should be able to find the sku by GET products/all or by looking on the web app).
* Only updates the fields specified in JSON body.
```zsh
PUT https://shopify-challenge-backend-ilya.herokuapp.com/00000001
```
```json
{
    "quantity": 9
}
```

#### DELETE products/sku
* Deletes product by sku
```zsh
DELETE https://shopify-challenge-backend-ilya.herokuapp.com/00000001
```
