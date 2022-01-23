import Item from "../item"
import Total from "../total";

/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      name: 'One Piece Tập 97: “Thánh Kinh Của Tôi” (Phiên Bản Bìa Rời)',
      title: '21/1/2022',
      department: '17:05:06 ',
      role: '65000đ',
      email: 'jane.cooper@example.com',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e0/fb/7e/6e5f4704b69ee600a8d4abfe43ff437d.jpg.webp',
    },
    {
      name: 'One Piece Tập 97: “Thánh Kinh Của Tôi” (Phiên Bản Bìa Rời)',
      title: '21/1/2022',
      department: '17:05:06 ',
      role: '65000đ',
      email: 'jane.cooper@example.com',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e0/fb/7e/6e5f4704b69ee600a8d4abfe43ff437d.jpg.webp',
    },
    {
      name: 'One Piece Tập 97: “Thánh Kinh Của Tôi” (Phiên Bản Bìa Rời)',
      title: '21/1/2022',
      department: '17:05:06 ',
      role: '65000đ',
      email: 'jane.cooper@example.com',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e0/fb/7e/6e5f4704b69ee600a8d4abfe43ff437d.jpg.webp',
    },
    {
      name: 'One Piece Tập 97: “Thánh Kinh Của Tôi” (Phiên Bản Bìa Rời)',
      title: '21/1/2022',
      department: '17:05:06 ',
      role: '65000đ',
      email: 'jane.cooper@example.com',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e0/fb/7e/6e5f4704b69ee600a8d4abfe43ff437d.jpg.webp',
    },
    {
      name: 'One Piece Tập 97: “Thánh Kinh Của Tôi” (Phiên Bản Bìa Rời)',
      title: '21/1/2022',
      department: '17:05:06 ',
      role: '65000đ',
      email: 'jane.cooper@example.com',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e0/fb/7e/6e5f4704b69ee600a8d4abfe43ff437d.jpg.webp',
    },
    {
      name: 'One Piece Tập 97: “Thánh Kinh Của Tôi” (Phiên Bản Bìa Rời)',
      title: '21/1/2022',
      department: '17:05:06 ',
      role: '65000đ',
      email: 'jane.cooper@example.com',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/e0/fb/7e/6e5f4704b69ee600a8d4abfe43ff437d.jpg.webp',
    },
    // More people...
  ]

  export default function Table(props) {
  let sum=0;
  const {orders}=props;
  const renderItem=()=>{

    return orders.map((item)=>{
        sum+=item.total;
       return <Item order={item} />
    })
  }
  // console.log(orders);
  
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto  ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Book's name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Order date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {renderItem()}
                  <Total total={sum}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  