import React from 'react';

const ShoppingList = () => {
  const [items, setItems] = React.useState([]);
  const [name, setName] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      setItems([...items, { name, quantity }]);
      setName('');
      setQuantity('');
    }
  };

  return (
    <div className="m-4">
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-2">Shopping List</h2>
        <form className="mb-4" onSubmit={handleSubmit}>
          {' '}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="item-name">
              Item Name:
            </label>
            <input
              className="border border-gray-400 p-2 w-lg rounded-lg"
              id="item-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="item-quantity">
              Quantity:
            </label>
            <input
              className="border border-gray-400 p-2 w-lg rounded-lg"
              id="item-quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add Item
          </button>
        </form>
      </div>

      <div className="mt-4 p-4 border border-gray-300 rounded">
        <h3 className="text-xl font-semibold mb-2">Items</h3>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index}>
              <p>
                Name: {item.name} - Quantity: {item.quantity}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
