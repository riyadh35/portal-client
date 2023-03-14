import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;


    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>

                <label htmlFor="delete-confirm-modal" onClick={() => setDeletingDoctor(doctor)} className="btn btn-xs btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;