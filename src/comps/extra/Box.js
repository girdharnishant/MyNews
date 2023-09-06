import React from 'react'
import { useState } from 'react'

export default function Box() {

    var arr = []
    const [list, setlist] = useState([]);
    const [element, updateEle] = useState(0);

    const createArray = (element) => {
        for (let i = 0; i < element; i++) arr.push("Nishant");
        setlist(arr);
    }

    const incEle = () => {
        updateEle(element + 1);
        createArray(element + 1);
        // console.log(arr);
    }

    const decEle = () => {
        if (element > 0) {
            updateEle(element - 1);
            createArray(element - 1);
            // console.log(arr);
        }
    }

    return (
        <>
            {console.log(3)}
        </>
    )

}