import React from 'react';
import {Pagination} from '@mui/material';
import Loader from '../UI/Loader/Loader';
import style from './Users.module.scss'
import User from "./User/User";

const Users = ({totalUsersCount, pageSize, currentPage, onChangePage, isFetching, users, ...props}) => {
    const pageCount = Math.ceil(totalUsersCount / pageSize);
    return (
        <section className={style.container}>
            <Pagination className={style.pageNumbers}
                        count={pageCount}
                        showFirstButton showLastButton
                        page={currentPage}
                        color='secondary'
                        onChange={(e, page) => {
                            onChangePage(page)
                        }}/>
            {!isFetching
                ? <div className={style.users}>
                    {users.map(u => <User key={u.id} user={u} {...props}/>)}
                </div>
                : <Loader/>
            }
        </section>
    )
}

export default Users;