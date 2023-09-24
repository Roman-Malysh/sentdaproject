import {AiFillHome} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {RiTimer2Fill} from 'react-icons/ri';
import {GrMail} from 'react-icons/gr';

import './Adress.scss';

export const Adress = () => {
  const color = '#88829a';
  return (
    <div className='adresses'>
      <h2 className='adresses__title'>sentda.com</h2>
      <div>
      <div className='adress'>
        <div className='adress-wrap'>
          <AiFillHome color={color}/>
          <a className='adress__p' href='https://maps.app.goo.gl/HQbo387Eu1bK4SoD8'>
            25 1st Ave SW, STE A,
            <br />
            Watertown, SD, 57201-3507
          </a>
        </div>
      </div>
      <div className='adress'>
        <div className='adress-wrap'>
          <BsTelephoneFill color={color}/>
          <a className='adress__p' href="tel:+1 (605) 956 3910">+1 (605) 956 3910</a>
        </div>
      </div>
      <div className='adress'>
        <div className='adress-wrap'>
          <RiTimer2Fill color={color}/>
          <p className='adress__p'>Mon-Fri: 9:00am – 5:00 pm EST</p>
        </div>
      </div>
      <div className='adress'>
        <div className='adress-wrap'>
          <GrMail color={color}/>
          <a className='adress__p' href="mailto:support@sentda.com">support@sentda.com</a>
        </div>
      </div>
      </div>
    </div>
  );
};
