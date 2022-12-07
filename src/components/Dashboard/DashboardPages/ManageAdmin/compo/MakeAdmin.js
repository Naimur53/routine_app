import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import AdminTableSingleRow from './AdminTableSingleRow';

const MakeAdmin = ({ setAllAdmin }) => {
    const [users, setUsers] = useState([])
    const [getLoading, setGetLoading] = useState(false)
    const input = useRef()
    const handleSearch = (e) => {
        e.preventDefault()
        const email = input.current.value;
        if (getLoading) {
            return
        }
        setGetLoading(true)
        if (email) {
            axios.get(`https://routineappserver-production-5617.up.railway.app/user?email=${email}`)
                .then(res => {
                    setUsers([res.data])
                    setGetLoading(false)
                })
                .catch(err => {
                    toast.error('User not found')
                    setGetLoading(false)
                })
        }

    }
    return (
        <div className='py-5'>
            <h2 className='mt-5 text-xl text-center mb-3'>Search User to make admin</h2>
            <div className='mb-5'>
                <form onSubmit={handleSearch}>
                    <div className="flex border  border-gray-300 justify-between pr-4 rounded-lg shadow shadow-light-pink items-center w-full ">
                        <input
                            type="email"
                            id="defasult-search"
                            className="block pl-4  rounded-tl-full rounded-bl-full focus:border-0 focus:outline-none bg-transparent   w-full py-3 placeholder:text-medium-purple  text- sm text-black         "
                            required

                            placeholder="Enter user or admin email"
                            ref={input}
                        />

                        <button
                            type="submit"
                            className="text-dark-purple  font-medium rounded-full text-sm p-1 "

                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-white-500 dark:text-white-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableBody>
                        {users.map((single) => (
                            <AdminTableSingleRow key={single._id} makeAdmin={true} allUser={users} setAllAdmin={setAllAdmin} {...single} setAllUser={setUsers} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MakeAdmin;