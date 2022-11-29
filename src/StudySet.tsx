import React from 'react';
import edit from './pencil.png'

const StudySet = () => {
    return (
        <div className={'card'}>
            <div className={'header-card'}>
                <span className={'description-card'}>Term</span>
                <span className={'count-card'}>1/10</span>
                <button className={'card-edit'}>
                    <img src={edit} alt="edit" height={18}/>
                </button>
            </div>
            <div className={'text-card'}>
                <span>Нататнік</span>
            </div>
            <div className={'buttons-card'}>
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </div>
    );
};

export default StudySet;