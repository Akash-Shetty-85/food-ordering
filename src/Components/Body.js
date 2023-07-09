import React, { useState } from 'react';
import '../Styles/Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBurger, faPlus } from '@fortawesome/free-solid-svg-icons'

import KitchenIcon from '@mui/icons-material/Kitchen';

const PopularDishes = [{
    imageLink: 'https://media.gettyimages.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490',
    id: '1',
    name: 'Biryani'
}, {
    imageLink: 'https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=263&h=180&c=7&r=0&o=5&pid=1.7',
    id: '2',
    name: 'Burger'
}, {
    imageLink: 'https://th.bing.com/th/id/OIP.Jd-H-LHiVSkNBlLR65nuVwHaEK?w=346&h=180&c=7&r=0&o=5&pid=1.7',
    id: '3',
    name: 'Pizza'
},
{
    imageLink: 'https://th.bing.com/th/id/OIP.2kFyPDpSrBDIJ-KEloCpMQHaE6?w=202&h=180&c=7&r=0&o=5&pid=1.7',
    id: '4',
    name: 'Malai Kofta'
},
{
    imageLink: 'https://th.bing.com/th/id/OIP.UWiKrM17pfPujsmsSvrNGAHaEK?w=292&h=180&c=7&r=0&o=5&pid=1.7',
    id: '5',
    name: 'idli vada'
},
{
    imageLink: 'https://th.bing.com/th/id/OIP.l8j1tnN3Pejjakb6UtBdBgHaEq?w=284&h=180&c=7&r=0&o=5&pid=1.7',
    id: '6',
    name: 'panner masala'
},
{
    imageLink: 'https://th.bing.com/th/id/OIP.bn8hF89Fxaroy3iP9zHbpgHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7',
    id: '7',
    name: 'ice-cream'
}]
const Recommended = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
];

const CardContent = [
    {
        id: '1',
        title: 'Card Title 1',
        description: 'This is the description for Card 1.',
        image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg'
    },
    {
        id: '2',
        title: 'Card Title 2',
        description: 'This is the description for Card 2.',
        image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg'
    },
    {
        id: '3',
        title: 'Card Title 3',
        description: 'This is the description for Card 3.',
        image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg'
    },
    {
        id: '4',
        title: 'Card Title 4',
        description: 'This is the description for Card 3.',
        image: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg'
    },

];
const dishes = [
    {
      name: "Masala Mughlai",
      rating: 4.2,
      description: "Chicken fried in deep tomato sauce with delicious spices",
      equipments: [
        "Refrigerator",
        "Microwave"
      ],
      image: "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 1
    },
    {
      name: "Masala Paneer",
      rating: 4.3,
      description: "Paneer tossed in gravy",
      equipments: [
        "Microwave"
      ],
      image: "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 2
    }
  ];


const Body = () => {
    const [value, setValue] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleImageClick = (id) => {
        setValue(id);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="body-container">
                <h4>Popular Dishes</h4>
                <div className="image-container">
                    {PopularDishes.map((image) => (
                        <div
                            className={`image-item ${value === image.id ? 'active-image' : ''}`}
                            key={image.id}
                            onClick={() => handleImageClick(image.id)}
                        >
                            <img src={image.imageLink} alt={image.name} className="round-image" />
                            <span className="image-name">{image.name}</span>
                        </div>
                    ))}
                </div>
                <hr />
            </div>


            <div className="card-container">
                <div className="card-scroll">
                    <div className="recommended-container">
                        <div className="dropdown">
                            <div className="dropdown-toggle" onClick={toggleDropdown}>
                                <span className="dropdown-label">Recommended</span>
                                <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>&#9662;</span>
                            </div>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    {Recommended.map((option,index) => (
                                        <li key={index} className="dropdown-item" onClick={() => setValue(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {dishes.map((dish , index) => (
                        <>
                            <div className="card" key={dish.id}>
                                <div className="card-left">
                                    <h5>{dish.name}<span className='rating'>{dish.rating}{'\u2605'}</span></h5>
                                    <p>Equipments: {dish.equipments.join(", ")}</p>
                                    {/* <KitchenIcon/> */}
                                    <p>{dish.description}</p>
                                </div>
                                <div className="card-right">
                                    <img src={dish.image} alt={dish.title} />
                                    <button className='addButton'
                                    >ADD <span><sup><FontAwesomeIcon icon={faPlus} size="2xs" style={{ color: "#e28446", }} /></sup></span></button>
                                </div>

                            </div>{index !== CardContent.length - 1 && <hr className="card-line" />}
                        </>
                    ))}
                </div>
            </div>
            <div className='itemsContainer'>
                {/* <FontAwesomeIcon icon={faBurgerSoda} /> */}
                <div>
                    <FontAwesomeIcon icon={faBurger} />

                    <span>3 food items selected</span>
                </div>

                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </>
    );
};

export default Body;
