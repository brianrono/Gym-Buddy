import React from 'react';
import './Trainers.css'

function Trainers() {
    return (
        <div className='join'>
        <h1>Registration Form</h1>
        <form className='joinform' >
            <input type='text' placeholder='Enter full name eg John Doe' name='name' id='name'/>
            <input type='text' placeholder='Enter title eg Assistant Trainer' name='title' id='title'/>
            <input type='url' placeholder='Facebook link' name='facebook' id='facebook'/>
            <input type='url' placeholder='Twitter link' name='twitter' id='twitter'/>
            <input type='url' placeholder='LinkedIn link' name='linkedin' id='linkedin'/>
            <input type='url' placeholder='Pintrest link' name='pintrest' id='pintrest'/>
            <br />
            <label htmlFor='picture'>Image Link:</label>
            <input type='url' placeholder='Paste direct link' name='picture' id='picture'/>
            <em>
            <span id='instructions'>
                <strong>Instructions</strong>:
            </span>{' '} Go to <a href='https://postimages.org/'>PostImages </a> and upload your potrait picture. 
            Copy the <strong> Direct Link </strong>{' '} and paste it above.
            </em>
            <br />
            <textarea name='message' id='message' cols='30' rows='10' placeholder='Write an introduction message..'></textarea>
            <button type='submit'>Submit Application</button>
        </form>
        </div>
    );
}

export default Trainers;