import React from 'react'
import './headerbanner.css';
export const Headerbanner = () => {
    return (
        <>
            <div className="navbar-top bg-success pt-2 pb-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <a href="#" className="mb-0 text-white">
                                20% cashback for new users | Code: <strong><span className="text-light">OGOFERS13 <span className="mdi mdi-tag-faces"></span></span> </strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
