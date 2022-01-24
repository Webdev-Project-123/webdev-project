import React from "react";

export default function Total(props) {
  const { total } = props;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {/* {person.role} */}
        Sum: {total}
      </td>
    </tr>
  );
}
