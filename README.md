# Merchant Service
This is a back-end developer project to create API merchant service that handles the catalog of products owned by merchants. This tool help merchants to add, delete, update, and get the list of their products. This tool requires Node.js.

# Architecture Diagram Merchant Service
![ARC MERCHANT SERVICE](https://user-images.githubusercontent.com/116246829/215279356-7fe05391-b3c6-4e66-9acd-8f715c493258.jpg)

# Entity Relationship Diagram
![ERD MERCHANT SERVICE](https://user-images.githubusercontent.com/116246829/215279358-20ead639-bd2b-425c-ba84-c65a92c9d2c5.jpg)

# List of API

/API/register
```
[POST] /register
====== To register or create account on merchant service
```

/API/Login
```
[POST] /login
====== Process where merchant can login to the service by using email
```

/API/Merchant
```
[GET] /merchant
===== Get list of merchant

[GET] /merchant/:id
===== Get one merchant by ID

[POST] /merchant/:id
===== Create merchant

[DEL] /merchant/:id
===== Delete merchant's account
```

/API/Product
```
[GET] /product
===== Get list of products

[GET] /merchant/:merchant_id/product
===== Get product from the merchant by ID

[POST] /product
====== Create product

[PUT] /merchant/:merchant_id/product/:id
===== Update product by ID

[DEL] /merchant/:merchant_id/product/:id
===== Delete product
