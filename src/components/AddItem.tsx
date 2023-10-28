import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AddItemProps = {
  onAdd: (text: string) => void;
}

const AddItem = ({onAdd}: AddItemProps) => {
  const [inputValue, setInputValue] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
      toast.success('Item Added To The List!');
    }else{
      toast.error('Please Provide a Value');
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        className="form-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" onClick={addItem}>Add Item</button>
      <ToastContainer position='top-center'/>
    </div>
  );
};

export default AddItem;
