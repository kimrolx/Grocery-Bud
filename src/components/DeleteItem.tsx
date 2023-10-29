import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type ItemProps = {
  text: string;
  id: number;
  onDelete: (id: number) => void;
};

const Item = ({ text, id, onDelete }: ItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    onDelete(id);
    toast.success('Item Deleted')
  }

  return (
    <div className={`single-item ${isChecked ? 'checked' : ''}`}>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox}/>
      <p style={{ textDecoration: isChecked ? 'line-through' : 'none', textTransform: 'capitalize' }}>
        {text}
      </p>
      <button className="btn remove-btn" onClick={handleDelete}>
        Delete
      </button>
      <ToastContainer position='top-center'/>
    </div>
  );
};

export default Item;
