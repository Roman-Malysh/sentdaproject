import {AiFillHome} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {RiTimer2Fill} from 'react-icons/ri';
import {GrMail} from 'react-icons/gr';

import './Adress.scss';

export const Adress = () => {
  return (
    <div className='adresses'>
      <h2 className='adresses__title'>sentda.com</h2>
      <div className='adress'>
        <div className='adress-wrap'>
          <AiFillHome color='#D1A476'/>
          <p className='adress__p'>
            25 1st Ave SW, STE A,
            <br />
            Watertown, SD, 57201-3507
          </p>
        </div>
      </div>
      <div className='adress'>
        <div className='adress-wrap'>
          <BsTelephoneFill color='#D1A476'/>
          <p className='adress__p'>+1 (605) 956 3910</p>
        </div>
      </div>
      <div className='adress'>
        <div className='adress-wrap'>
          <RiTimer2Fill color='#D1A476'/>
          <p className='adress__p'>Mon-Fri: 9:00am – 5:00 pm EST</p>
        </div>
      </div>
      <div className='adress'>
        <div className='adress-wrap'>
          <GrMail color='#D1A476'/>
          <p className='adress__p'>support@sentda.com</p>
        </div>
      </div>
    </div>
  );
};
