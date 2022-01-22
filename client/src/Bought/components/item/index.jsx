import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
    const {order}=props;
    
  return (
    <tr key={order.id}>
       <Link to={`/products/${order.bookId}`} >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 " src={order.image} alt="" />
          </div>
          <div className="ml-4">
           
          
           <div className="text-sm font-medium text-gray-900">
              {order.name}
            </div>
            {/* <div className="text-sm text-gray-500">{person.email}</div> */}
          </div>
        </div>
      </td></Link> 
      <td className="px-6 py-4 whitespace-nowrap">
        {/* <div className="text-sm text-gray-900">{order.name}</div> */}
        <div className="text-sm text-gray-500">{order.date}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          style={{ fontSize: "15px" }}
          className="text-center px-2 inline-flex text-xs leading-5  "
        >
          {order.amount}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {order.total}
      </td>
    </tr>
  );
}
