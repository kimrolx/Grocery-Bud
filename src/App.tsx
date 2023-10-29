import { useState, useEffect } from 'react';
import DeleteItem from './components/DeleteItem';
import AddItem from './components/AddItem';
import './index.css';

function App() {
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);

   useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(storedItems);
  }, []);

  const deleteItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const addItem = (text: string) => {
    const newItem = {
      id: new Date().getTime(),
      text: text,
    };
    const updatedItems = [...items, newItem];
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div className="root">
      <section className="section-center">
        <div className="Toastify"></div>
        <form>
          <h4>Grocery Bud</h4>
          <div className="title-underline"/>
            <AddItem onAdd={addItem} />
        <div className="items">
          {items.map((item) => (
            <DeleteItem
              key={item.id}
              text={item.text}
              id={item.id}
              onDelete={deleteItem}
            />
          ))}
        </div>
        </form>
      </section>
    </div>
  );
}

export default App;
