import React from 'react'
import { toast, Slide } from 'react-toastify'

export function sucessTost(prop) {
    toast.success(
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <h6 className='toast-title font-weight-bold'>{prop}</h6>
                {/* <h6 className='toast-title font-weight-bold text-uppercase'>CATEGORY NAME ALREADY TAKEN</h6> */}
            </div>
        </div>,
        { transition: Slide, hideProgressBar: true, autoClose: 3000 }
    )
}
export function warningTost(prop) {
    toast.warning(
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <h6 className='toast-title font-weight-bold text-uppercase'>{prop}</h6>
                {/* <h6 className='toast-title font-weight-bold text-uppercase'>CATEGORY NAME ALREADY TAKEN</h6> */}
            </div>
        </div>,
        { transition: Slide, hideProgressBar: true, autoClose: 3000 }
    )
}
