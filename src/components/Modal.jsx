import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { JobsContext } from '../contexts/JobContext';

const Modal = ({ job, closeModal }) => {
    const { id } = useParams();
    const { deleteJob } = useContext(JobsContext);

    const onDeleteClick = async (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this job?');
        if (!confirm) return;
        await deleteJob(jobId);
        toast.success('Job Deleted Successfully');
        window.location.reload('/');
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 mb-2 font-medium text-gray-900" >{job.company} - {job.title}</h3>
                        <div className="mt-2">
                            <p className="text-sm mb-2 text-gray-500" >{job.description}</p>
                            <p className="text-sm mb-2 text-gray-500" >Level: {job.level}</p>
                            <p className="text-sm text-gray-500" >Type: {job.type}</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={() => onDeleteClick(job.id)} className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Delete
                        </button>
                        <button onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;