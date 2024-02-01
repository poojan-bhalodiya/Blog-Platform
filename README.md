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
| cors | ^2.8.5 |
| dotenv | ^16.3.1 |
| express | ~4.18.2 |
| mongoose | ^8.0.3 |
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

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706795298/Projects/Blog-Platform/Screen%20Short/Register%20User.png)

### Login User

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706795829/Projects/Blog-Platform/Screen%20Short/Login%20User.png)

### Add Blog 

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706795986/Projects/Blog-Platform/Screen%20Short/Add%20Blog.png)

### Get All Blogs

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706796084/Projects/Blog-Platform/Screen%20Short/Get%20all%20DATA.webp)

### Get One Blog by id

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706796225/Projects/Blog-Platform/Screen%20Short/Get%20one%20data.png)

### Update Blog 

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706796296/Projects/Blog-Platform/Screen%20Short/update.png)

### Delete Blog 

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706796345/Projects/Blog-Platform/Screen%20Short/Delete%20Blog.png)



