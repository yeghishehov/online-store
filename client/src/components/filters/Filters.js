import React, { useEffect, useState } from 'react'
import UpArrow from '@material-ui/icons/ExpandLess'
import DownArrow from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import classes from './style.module.css'

const filters = ['Size', 'Price', 'Colors', 'Collection']
const info = [
    {name: 'Size', values: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']},
    {name: 'Price', values: ['Less than 45', 'Less than 70', 'Less than 100']},
    {name: 'Colors', values: ['Grey', 'Black', 'Brown', 'Dark', 'Red', 'Blue', 'Grape', 'Pink', 'White']},
    {name: 'Collection', values: ['Atom Eternal', 'Oasis', 'Startup', 'Marathon Skin', 'Matter Stone', 'Suite', 'The Match', 'Marathon Origin', 'Block', 'The Journey']},
]

export default function Filters({setFiltersInfo}) {
    const [open, setOpen] = useState(
        filters.reduce((acc, filter) => (
            {...acc, [filter]: false}
        ),{})
    )
    const [selectedInfo, setSelectedInfo] = useState(
        info.map(el => ({name: el.name, values: []}))
    )

    useEffect(() => {
        setFiltersInfo(selectedInfo.reduce((acc, el) => ({...acc, [el.name]: el.values}), {}))
    },[selectedInfo, setFiltersInfo])

    const handleOpen = (flter) => {
        const defaultState = filters.reduce((acc, filter) => (
            {...acc, [filter]: false}
        ),{})
        setOpen({
            ...defaultState,
            [flter]: !open[flter]
        })
    }

    const handleSelectInfo = (name, value) => {
        const objs = [...selectedInfo]
        objs.forEach((obj, idx, arr) => {
            if(obj.name === name) {
                const indexOfValue = obj.values.findIndex(el => el === value)
                if(indexOfValue === -1) {
                    arr[idx].values.push(value)
                } else {
                    arr[idx].values.splice(indexOfValue, 1);
                }
            }
        })
        setSelectedInfo(objs)
        // setFiltersInfo(objs)
    }

    return (
        <div className={classes.root}>
            <div className={classes.filters}>
                {filters.map(filter => (
                    <button
                        key={filter}
                        className={open[filter] ? classes.clickedButton : classes.button}
                        onClick={() => handleOpen(filter)}
                    >
                        {filter}
                        {open[filter]
                            ? <UpArrow fontSize="default" />
                            : <DownArrow fontSize="default" />
                        }
                    </button>
                ))}
            </div>
            <div>
                {info.map(el => (
                    <div
                        key={el.name}
                        className={open[el.name] ? classes.info : classes.hidden }
                    >
                        {el.values.map(value => (
                            <button
                                key={value}
                                className={
                                    selectedInfo.find(selectedEl => el.name === selectedEl.name).values.includes(value)
                                        ? classes.clickedValueButton
                                        : classes.valueButton
                                    }
                                onClick={() => handleSelectInfo(el.name, value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className={classes.chips}>
                {selectedInfo.map(el => (
                    el.values.map(value => (
                        <Chip
                            key={value}
                            className={classes.chip}
                            label={value}
                            onDelete={() => handleSelectInfo(el.name, value)}
                        />
                    ))
                ))}
            </div>
        </div>
    )
}