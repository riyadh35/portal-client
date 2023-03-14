import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentMaker from './AppoinmentMaker';
import AvailableAppoinments from './AvailableAppoinments';


const Appointment = () => {

    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentMaker date={date} setDate={setDate} />
            <AvailableAppoinments date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;