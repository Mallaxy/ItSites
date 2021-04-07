import React from 'react';
import s from './Filter.module.css'

export const Filter = (props) => {
    return (
        <div className={s.filter}>
            <div className={s.filterResult}>{props.count}</div>
            <div className={s.filterBlade}>
                Blade
                <select value={props.values.blade}
                        onChange={event => props.setFilterValues({blade: event.target.value})}>
                    <option value={''}>ALL</option>
                    <option value={'iron'}>Iron</option>
                    <option value={'ceramic'}>Ceramic</option>
                    <option value={'titanium'}>Titanium</option>
                </select>
            </div>
            <div className={s.filterHandle}>
                Handle
                <select value={props.values.handle} onChange={event => props.setFilterValues({handle: event.target.value})}>
                    <option value={''}>ALL</option>
                    <option value={'steel'}>Steel</option>
                    <option value={'plastic'}>Plastic</option>
                    <option value={'wood'}>Wood</option>
                </select>
            </div>
            <div className={s.filterLength}>
                Length
                <select value={props.values.length} onChange={event => props.setFilterValues({length: event.target.value})}>
                    <option value={''}>ALL</option>
                    <option value={'15'}>15</option>
                    <option value={'20'}>20</option>
                    <option value={'25'}>25</option>
                </select>
            </div>
        </div>
    );
}


export default Filter;