# Blog plateforme using Node.js 
This is a Blog platform. first to register to user, login user. User is login that the user Can Provide to CRUD Operation for blog so user can add blog, read blog, update blog, delete blog. User can search blog to particular id also.

### Get Todo request 
```http://localhost:8089/```

### How to run this Project

- Install dependency

```npm i``` 

- Run the Project

```npm run dev```


## Packages

| Name             | Version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| body-parser | ^1.20.2 |
| qrcode | ^1.5.3 |
| express | ~4.18.1 |
| nodemon | ^3.0.2 |


## API Reference

#### Register User

``` POST || http://localhost:8089/register ```

add details to register User
"firstName",
"lastName",
"mobileNo",
"email",
"password".

#### Login User

```GET || http://localhost:8089/login```

Take pass "Email" and "password" to login user.

#### Add Blog

``` POST || http://localhost:8089/blog```

Add Blog Title and description on add Blog.

#### Get all Blog

``` GET || http://localhost:8089/blogs```

Show all Blog.

#### Get one Blog

``` GET || http://localhost:8089/blog/${id} ```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Blog to fetch |

#### Update Blog

``` PUT || http://localhost:8089/blog/${id}```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Blog to fetch |

#### Delete Blog

```DELETE || http://localhost:8089/blog/${id}```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Blog to fetch |



## Screenshots

### Register User

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/5e768cfd-f911-4002-8ff9-d0cd60b3ce33)

### Login User

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/f02a8cb9-cbb0-464e-a0d1-5618e9ed67c4)

### Add Blog 

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/9a3361ce-1bfa-4820-bc00-3745dbc8ec27)

### Get All Blogs

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/c002ca2c-e3e6-4112-926e-9b8bb8c71464)

### Get One Blog by id

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/55dd8ab6-cb6b-4cdf-91cb-1d7d3618695a)

### Update Blog 

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/c5dbb0d7-0ddb-4ccc-a550-8d6f6a501fd4)

### Delete Blog 

![image](https://github.com/poojan-bhalodiya/Blog-Platform/assets/120900697/47814ae1-8f20-48f7-ae8e-24db897e6b03)



