import React from 'react';

const CommentCard = ({comment}) => {

    console.log(comment)

    const {user, rating, text} = comment;

    return (
        <div className='shadow-lg border border-gray-100 px-5 py-3 rounded-lg'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-gray-400'></div>
                    <div>
                        <h1>{user}</h1>
                        <p>2 Hourse ago</p>
                    </div>
                </div>
                <div>
                    {
                        [...Array(rating)].map((_, index) => <span key={index} className='text-yellow-400 text-lg'>&#9733;</span>)
                    }
                </div>
            </div>
            <p className='mt-2'>{text}</p>
        </div>
    );
};

export default CommentCard;