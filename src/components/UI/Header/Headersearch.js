import React from 'react'
import './Headersearch.Modules.css';
import style from './Headersearch.Modules.css';

export const Headersearch = () => {
    return (
        <div className="top-categories-search" data-select2-id="6">
            <div className="input-group" data-select2-id="5">
                <span className="input-group-btn categories-dropdown">
                    <select className="form-control-select select2-hidden-accessible settings" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                        <option select="selected" data-select2-id="3">Your City</option>
                        <option value="0" data-select2-id="9">New Delhi</option>
                        <option value="2" data-select2-id="10">Bengaluru</option>
                        <option value="3" data-select2-id="11">Hyderabad</option>
                        <option value="4" data-select2-id="12">Kolkata</option>
                    </select>
                    <span className="select2 select2_container select2-container--default select2-container--below" dir="ltr" data-select2-id="2" style={ { width: 168 } }>
                        <span className="selection">
                            <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-qp12-container">
                                <span className="select2-selection__rendered" id="select2-qp12-container" role="textbox" aria-readonly="true" title="Your City"></span>

                                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                        <span className="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                </span>
                <input className="form-control" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text"></input>
                <span className="input-group-btn ">
                    <button className="btn btn-secondary" type="button"><i className="mdi mdi-file-find"></i> Search</button>
                </span>
            </div>
        </div>

    )

}
