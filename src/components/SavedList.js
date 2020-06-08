import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function SavedList(props) {

    return (
        
        <div className="SavedList">            
            <div className='SavedListTitle'>Saved</div>
            {props.savedList.map(pix => (<SavedPix pix={pix}></SavedPix>))}
        </div>
    )
}

function SavedPix(props) {

    return <div className="SavedListRow"><div className = "SavedId">#{props.pix.id } </div> <div onClick={() => window.open(props.pix.webformatURL)}><FaExternalLinkAlt className='IconAlign'/>  </div></div>;
}

export default SavedList;