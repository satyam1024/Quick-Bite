const products_list = [
        {
            id: "p001",
            name: "Double Cheese Pizza",
            flavor_id: [1, 5],
            off: 5,
            price: 350,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/double-cheese-pizza.jpg"
        },
        {
            id: "p002",
            name: "Margherita Pizza",
            flavor_id: [1, 5],
            off: 5,
            price: 250,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/Margherita.jpg"
        },
        {
            id: "p003",
            name: "Mexican Veg Pizza",
            flavor_id: [1, 5],
            off: 5,
            price: 300,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/mexican-veg-pizza.webp"
        },
        {
            id: "p004",
            name: "Paneer Pizza",
            flavor_id: [1, 5],
            off: 5,
            price: 320,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/paneerpizza.jpg"
        },
        {
            id: "p005",
            name: "Pasta Pizza",
            flavor_id: [1, 5],
            off: 8,
            price: 400,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/pasta pizza.jpg"
        },
        {
            id: "p006",
            name: "Schezwan Margherita Pizza",
            flavor_id: [1, 5],
            off: 8,
            price: 370,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/schezwan-margherita pizza.jpg"
        },
        {
            id: "p007",
            name: "Veg Onion Pizza",
            flavor_id: [1, 5],
            off: 8,
            price: 280,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/veg-onion-pizza.webp"
        },
        {
            id: "p011",
            name: "Seafood Pizza",
            flavor_id: [1, 4],
            off: 8,
            price: 450,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/seafood.jpg"
        },
        {
            id: "p012",
            name: "Pepperoni Pizza",
            flavor_id: [1, 4],
            off: 8,
            price: 420,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/pepperoni2.jpg"
        },
        {
            id: "p018",
            name: "Coca Cola",
            flavor_id: [3],
            off: 8,
            price: 50,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/coca-cola.png"
        },
        {
            id: "p019",
            name: "Fanta",
            flavor_id: [3],
            off: 8,
            price: 50,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/fanta.png"
        },
        {
            id: "p020",
            name: "Sprite",
            flavor_id: [3],
            off: 8,
            price: 50,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/sprite.png"
        },
        {
            id: "p013",
            name: "Chicken Pizza",
            flavor_id: [1, 4],
            off: 8,
            price: 380,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/chicken-pizza.jpg"
        },
        {
            id: "p014",
            name: "Cheese Burger",
            flavor_id: [2, 5],
            off: 4,
            price: 120,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/Cheeseburger.jpg"
        },
        {
            id: "p015",
            name: "Chicken Burger",
            flavor_id: [2, 4],
            off: 25,
            price: 150,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/chicken-burger.jpg"
        },
        {
            id: "p016",
            name: "Veg Burger",
            flavor_id: [5, 2],
            off: 10,
            price: 100,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
            image: "images/veg burger.jpg"
        }
            
        ,
//     {
//         id: "p017",
//         name: " Strawberry",
//         flavor_id: "f004",
//         off: 8,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/strawberry.jpg"
//     },
//     {
//         id: "p018",
//         name: "Cake Batter",
//         flavor_id: "f004",
//         off: 12,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/rainbow.jpg"
//     },
//     {
//         id: "p019",
//         name: "Greek Yogurt",
//         flavor_id: "f004",
//         off: 8,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/vannila.jpg"
//     },
//     {
//         id: "p020",
//         name: "Pistachio",
//         flavor_id: "f004",
//         off: 1,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/chocolate.jpg"
//     },
//     {
//         id: "p021",
//         name: "Fudge Brownie",
//         flavor_id: "f005",
//         off: 0,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/blue berry.jpg"
//     },
//     {
//         id: "p022",
//         name: "Peanut Butter",
//         flavor_id: "f005",
//         off: 3,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/rainbow.jpg"
//     },
//     {
//         id: "p023",
//         name: "Mint Chip Dairy-Free",
//         flavor_id: "f005",
//         off: 15,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/mint.jpg"
//     },
//     {
//         id: "p024",
//         name: "Oat Milk Chocolate",
//         flavor_id: "f005",
//         off: 8,
//         price: 50,
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
//         image: "images/chocolate.jpg"
//     },
// 
]

export default products_list;