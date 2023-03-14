import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';



const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    toast(`Appoinment is set,${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You Already hava an Appoinment,${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                // to close the modal 
                setTreatment(null)
            })


    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle " />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box border-red-500 border-2 my-4">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='my-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="font-bold input input-bordered w-full mb-2 py-4" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full mt-2 py-4" />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered w-full mt-2 py-4" />
                        <input name='phone' type="phone" placeholder='phone number' className="input input-bordered w-full mt-2 py-4" />

                        <input type="submit" placeholder="submit" className="btn btn-secondary w-full mt-2 font-bold uppercase" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;