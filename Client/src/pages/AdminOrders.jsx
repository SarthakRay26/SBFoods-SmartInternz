import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminOrders = ({setIsAdmin}) => {
    
    const [orders,setOrders] = useState([]);
    
    const getAllOrders = async () => {
    
        try {
            const response = await axios.post('http://localhost:8787/api/Order/GetOrders', {});
            setOrders(response.data)
        } catch (error) {
            console.error('Error making GET request:', error);
        }
    }
    
    getAllOrders();

    const handleComplete = async (_id) => {
        try {
            const response = await axios.post('http://localhost:8787/api/Order/deleteOrder',{"id": _id})
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = async (_id) => {
        try {
            const response = await axios.post('http://localhost:8787/api/Order/deleteOrder',{"id": _id})
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
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
        //check admin redirect to login page after 10 seconds for some reason
        // checkAdminStatus();
        setIsAdmin(true);
    })
  return (
    <>
    <div className='text-white'>
    <div className='overflow-x-auto'>
        <table className='min-w-full'>
            <thead>
                <tr>
                    <th className='pr-5'>User Id</th>
                    <th className='pr-5'>Order</th>
                    <th className='pr-5'>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <>
                        <tr key={index}>
                            <td className='pr-5'>{order.userId}</td>
                            <td className='pr-5'>
                                <ul>
                                    {order.orderItems.map((item, index) => (
                                        <li key={index}>
                                            {item.title} - INR {item.price}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className='pr-5'>{order.address}</td>
                            <td>
                                <button onClick={() => handleComplete()} className='bg-green-500 rounded-lg p-4 mr-4'>Fulfilled</button>
                                <button onClick={() => handleCancel(order._id)} className='bg-red-500 rounded-lg p-4'>X</button>
                            </td>
                        </tr>
                        {index < orders.length - 1 && <tr><td colSpan="4"><hr /></td></tr>}
                    </>
                ))}
            </tbody>
        </table>
    </div>
</div>
</>
  )
}

export default AdminOrders