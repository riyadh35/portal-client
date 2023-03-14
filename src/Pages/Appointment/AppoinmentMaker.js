import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Chair from '../../assets/images/chair.png'

const AppoinmentMaker = ({ date, setDate }) => {
    // let footer = <p>Please select a day.</p>;
    // if (date) {
    //     footer = <p>You have selected: <span className='font-bold'> {format(date, 'PP')}.</span></p>;
    // }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content ml-10 pl-10 flex-col lg:flex-row-reverse">
                <img src={Chair} className="max-w-xl  rounded-lg shadow-2xl" alt='dentist chair' />
                <div className='shadow-2xl mr-10'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    // footer={footer}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppoinmentMaker;