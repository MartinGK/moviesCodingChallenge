import React from 'react';

export default function Modal(props) {
    return (
        <div>
            <input className="modal-state" id="modal" type="checkbox" checked={props.open} onChange={() => { }} />
            <div className="modal">
                <label className="modal__bg" onClick={props.onClose} htmlFor="modal"></label>
                <div className="modal__inner">
                    <label className="modal__close" onClick={props.onClose} htmlFor="modal"></label>
                    <section className="modalContainer">
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    )
}