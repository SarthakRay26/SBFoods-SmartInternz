import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const token = localStorage.getItem('token');

const patchData = async (id, data) => {
  try {
    const response = await axios.patch(`http://localhost:8787/api/Food/FoodItems/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error making PATCH request:', error);
  }
};

const getFoodItems = async () => {
  const response = await fetch("http://localhost:8787/api/Food/FoodItems");
  const data = await response.json();
  return data;
};

const handleButton = (id, title, price, image, currentImage, currentPrice, currentTitle) => {
  if (currentImage === '' && currentPrice === '' && currentTitle === '') {
    console.log('No changes made');
  } else {
    const data = {
      'title': currentTitle === '' ? title : currentTitle,
      'price': currentPrice === '' ? price : currentPrice,
      'image': currentImage === '' ? image : currentImage
    };
    patchData(id, data);
  }
}

const handleNewItem = async (newItem) => {
  try {
    const response = await axios.post(`http://localhost:8787/api/Food/FoodItems/addItem`, newItem, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error making POST request:', error);
  }
}

const food = await getFoodItems();

const foodCardData = () => food;

const AdminPage = ({ isLogged,setIsAdmin, isAdmin }) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [newItem, setNewItem] = useState({});

  const foodItems = foodCardData();

  const navigate = useNavigate();

  const checkAdminStatus = async () => {
    try {
      const response = await axios.get('http://localhost:8787/api/checkAdmin', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if(response.data.isAdmin === false){
        localStorage.clear();
        navigate('/AdminLogin');
      }else{
        setIsAdmin(true);
      }
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  }

  useEffect(() => {
    checkAdminStatus();
    if (!isLogged) {
      console.log(isLogged);
      navigate("/AdminLogin");
    }
  }, [isLogged, navigate]);

  return (
    <>
      <div className="text-white max-w-[75vw] flex flex-col justify-center items-center mx-auto">
        <input placeholder="new item title" className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 flex-grow text-black" onChange={
          (e) => {
            setNewItem({...newItem, 'title': e.target.value});
          }
        }/>
        <input placeholder="new item price" className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 flex-grow text-black" onChange={
          (e) => {
            setNewItem({...newItem, 'price': e.target.value});
          }
        }/>
        <input placeholder="new item image link" className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 flex-grow text-black" onChange={
          (e) =>{
            setNewItem({...newItem, 'image': e.target.value});
          }
        }/>
        <button className="bg-green-500 p-2 mt-4 rounded-md" onClick={()=>{handleNewItem(newItem)}}>Add New Item</button>
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 m-4 rounded-md flex flex-col md:flex-row items-center w-full"
          >
            <img src={item.image} alt="food" className="w-1/3 max-w-40 h-44 object-cover" />
            <div className="ml-4 flex-grow">
              <h1>{item.title}</h1>
              <h1>&#8377; {item.price}</h1>
              
              <div className="flex flex-col md:flex-row w-[1/3] mt-4">
                <input
                  type="text"
                  className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 flex-grow text-black"
                  placeholder="Enter new title"
                  onChange={(e) => {
                    setCurrentTitle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 flex-grow text-black"
                  placeholder="Enter new price"
                  onChange={(e) => {
                    setCurrentPrice(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="p-2 border rounded-md flex-grow text-black"
                  placeholder="Enter new image link"
                  onChange={(e) => {
                    setCurrentImage(e.target.value);
                  }}
                />
              </div>
              <button 
                className="bg-green-500 p-2 mt-4 rounded-md"
                onClick={() => {handleButton(item._id, item.title, item.price, item.image, currentImage, currentPrice, currentTitle)}}
              >Update</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminPage;