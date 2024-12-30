
![Logo](https://github.com/user-attachments/assets/e2c51f03-6aac-4375-8ab2-dd3fc9e1c5bb) 
# Pet-Hub 



###  Offers a diverse range of pets for Adoption Bringing Families Together ❤️‍ 

 
##### Pet-Hub is a user-friendly pet adoption website designed to connect pets with loving homes. It features a variety of animals like cats, dogs, rabbits, and birds, with detailed profiles that include breed, age, gender, and adoption fees. The platform offers easy navigation, sorting options, and quick actions for adoption inquiries, making the process seamless and engaging for users.



## API Reference
### Fetch API:


#### Get all types of pets:


```http
 https://openapi.programming-hero.com/api/peddy/pets
```



#### Fetch Pet Details by ID:

```http
  https://openapi.programming-hero.com/api/peddy/pet/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Fetch All Pet Categories:

```http
 https://openapi.programming-hero.com/api/peddy/categories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. string of item to fetch |

#### Fetch Pets by Category:

```http
  https://openapi.programming-hero.com/api/peddy/category/dog
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. string of item to fetch |
  



## Features



- User-Friendly Interface
- Diverse Pet Categories
- Detailed Pet Profiles
- Responsive Design
- Adoption and Details Buttons


## Usage/Examples
- Arrow Functions:

``` javascript:

const handleAdoptClick = () => {
    console.log("Adopt button clicked!");
};

```
- Template Literals:
``` javascript:
 <h3>${pet.name}</h3>

```
- Let and Const:
``` javascript:

let currentFilter = 'all';
};

```
- Promises and async/await:
``` javascript:

const fetchPets = async () => {
    try {
        const response = await fetch('/api/pets');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching pets:', error);
    }
};

```
## 🔗 Links
Netlify- Link : (https://pet-hubshop.netlify.app/)

