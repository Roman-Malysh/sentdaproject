import {useState} from 'react';
import classnames from 'classnames';
import {AiTwotoneDelete} from 'react-icons/ai';
import '../components/Defaultsection.scss';

export const CartCard = ({item, filter}) => {
  const [quantity, setQuantity] = useState(1);
  const [isDelete, setISDelete] = useState(false);

  const deleteItems = (name) => {
    localStorage.removeItem(name);
  };

  return (
    <div className='loaderWrap'>
      <div className={classnames('Cardcart', {'blur': isDelete})}>
      <img src={item.Images} alt='Error' className='Cardcart__image' />
      <div className='Cardcart__wrap'>
        <p className='Cardcart__price'>{item['Regular price']}$</p>
        <p className='Cardcart__p'>{item.Name}</p>
        <div className='adder-deleter-wrap'>
          <div className='adder-wrap'>
            <button
              className='adder-wrap__button'
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <p className='adder-wrap__p'>{quantity}</p>
            <button
              className='adder-wrap__button'
              onClick={() => {
                quantity > 0 && setQuantity(quantity - 1);
              }}
            >
              -
            </button>
          </div>
          <AiTwotoneDelete
            color='#616683'
            size={20}
            onClick={() => {
              setISDelete(true);
              setTimeout(() => {
                deleteItems(item.Name);
                filter(item.ID);
                setISDelete(false);
              },2000)
            }}
          />
        </div>
      </div>
    </div>
    {isDelete && (<div class="lds-circle"><div></div></div>)}
    </div>
  );
};
