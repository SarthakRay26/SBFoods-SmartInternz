import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const orders = [
    {
        'email': 'jayatekwani76@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Chicken Fried Rice',
                    'price': 5.99,
                },
                {
                    'title': 'Chicken Biryani',
                    'price': 9.99,
                }
            ],
            'total': 15.98
        },
        'address': '1234 Main St, Anytown, USA'
    },
    {
        'email': 'testMail1@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Hot Dog',
                    'price': 3.99,
                },
                {
                    'title': 'Cheeseburger',
                    'price': 5.99,
                }
            ],
            'total': 9.98
        },
        'address': '5678 Elm St, Anytown, USA'
    },
    {
        'email': 'example1@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Veggie Pizza',
                    'price': 8.99,
                },
                {
                    'title': 'Garlic Bread',
                    'price': 4.99,
                }
            ],
            'total': 13.98
        },
        'address': '4321 Oak St, Anytown, USA'
    },
    {
        'email': 'example2@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Pasta Carbonara',
                    'price': 11.99,
                },
                {
                    'title': 'Caesar Salad',
                    'price': 6.99,
                }
            ],
            'total': 18.98
        },
        'address': '8765 Pine St, Anytown, USA'
    },
    {
        'email': 'example3@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Sushi Roll',
                    'price': 12.99,
                },
                {
                    'title': 'Miso Soup',
                    'price': 2.99,
                }
            ],
            'total': 15.98
        },
        'address': '6789 Maple St, Anytown, USA'
    },
    {
        'email': 'example4@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Beef Tacos',
                    'price': 7.99,
                },
                {
                    'title': 'Nachos',
                    'price': 5.99,
                }
            ],
            'total': 13.98
        },
        'address': '1357 Cedar St, Anytown, USA'
    },
    {
        'email': 'example5@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Butter Chicken',
                    'price': 10.99,
                },
                {
                    'title': 'Naan Bread',
                    'price': 2.99,
                }
            ],
            'total': 13.98
        },
        'address': '2468 Birch St, Anytown, USA'
    },
    {
        'email': 'example6@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Margherita Pizza',
                    'price': 9.99,
                },
                {
                    'title': 'Tiramisu',
                    'price': 4.99,
                }
            ],
            'total': 14.98
        },
        'address': '9753 Walnut St, Anytown, USA'
    },
    {
        'email': 'example7@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Grilled Cheese Sandwich',
                    'price': 5.99,
                },
                {
                    'title': 'Tomato Soup',
                    'price': 3.99,
                }
            ],
            'total': 9.98
        },
        'address': '8642 Spruce St, Anytown, USA'
    },
    {
        'email': 'example8@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Chicken Wings',
                    'price': 8.99,
                },
                {
                    'title': 'French Fries',
                    'price': 2.99,
                }
            ],
            'total': 11.98
        },
        'address': '7531 Fir St, Anytown, USA'
    },
    {
        'email': 'example9@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Pancakes',
                    'price': 6.99,
                },
                {
                    'title': 'Bacon',
                    'price': 3.99,
                }
            ],
            'total': 10.98
        },
        'address': '1593 Cherry St, Anytown, USA'
    },
    {
        'email': 'example10@gmail.com',
        'order': {
            'items': [
                {
                    'title': 'Fish and Chips',
                    'price': 12.99,
                },
                {
                    'title': 'Coleslaw',
                    'price': 2.99,
                }
            ],
            'total': 15.98
        },
        'address': '2614 Maple St, Anytown, USA'
    },
]



const AdminOrders = ({setIsAdmin}) => {

    const handleComplete = () => {
        console.log('Order fulfilled');
    }

    const handleCancel = () => {
        console.log('Order cancelled');
    }

    const navigate = useNavigate();

    const checkAdminStatus = async () => {
        const token = localStorage.getItem('token');

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
            navigate('/AdminLogin')
          }  
    };

    useEffect(() => {
        checkAdminStatus();
        setIsAdmin(true);
    })
  return (
    <>
    <div className='text-white'>
        <div className='overflow-x-auto'>
            <table className='min-w-full'>
                <thead>
                    <tr>
                        <th className='pr-5'>Email</th>
                        <th className='pr-5'>Order</th>
                        <th className='pr-5'>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className='pr-5'>{order.email}</td>
                            <td className='pr-5'>
                                <ul>
                                    {order.order.items.map((item, index) => (
                                        <li key={index}>
                                            {item.title} - ${item.price}
                                        </li>
                                    ))}
                                </ul>
                                <p>Total: ${order.order.total}</p>
                            </td>
                            <td className='pr-5'>{order.address}</td>
                            <td>
                                <button onClick={() => handleComplete()} className='bg-green-500 rounded-lg p-4 mr-4'>Fulfilled</button>
                                <button onClick={() => handleCancel()} className='bg-red-500 rounded-lg p-4'>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</>
  )
}

export default AdminOrders