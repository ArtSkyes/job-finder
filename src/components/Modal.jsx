import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { config } from '../services/config';

const Modal = ({ job, closeModal }) => {
    const queryClient = useQueryClient();

    const deleteJobMutation = useMutation({
        mutationFn: async (jobId) => {
            const response = await fetch(`${config.API_URL}/jobs/${jobId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete job');
            }
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
            toast.success('Job Deleted Successfully');
            closeModal();
        },
        onError: (error) => {
            toast.error(`Error deleting job: ${error.message}`);
        }
    });

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this job?');
        if (!confirm) return;
        deleteJobMutation.mutate(jobId);
    };

    return (
        <Dialog
            open={true}
            onClose={closeModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="fixed z-10 inset-0 overflow-y-auto"
        >
            <DialogTitle id="modal-title">{`${job.company} - ${job.title}`}</DialogTitle>
            <DialogContent>
                <DialogContentText id="modal-description">
                    {job.description}
                    <br />
                    Level: {job.level}
                    <br />
                    Type: {job.type}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => onDeleteClick(job.id)} color="error" className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
                    Delete
                </Button>
                <Button variant="contained" onClick={closeModal} color="primary" className="bg-gray-600 hover:bg-gray-700 focus:ring-gray-500">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;