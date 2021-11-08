import React from "react";

export default function ResetPrevNext(props) {
    var current_data = 0;

    function resetData() {
        document.getElementById('result').style.display = 'none';
    }

    function prevData() {
        document.getElementById('result').style.display = 'block';
        if (current_data > 1) {
            current_data--;
            changeData(current_data);
        }
    }
    
    function nextData() {
        document.getElementById('result').style.display = 'block';
        if (current_data < props.array.length) {
            current_data++;
            changeData(current_data);
        }
    }

    function changeData(data) {
        for (var i = (data - 1); i < data; i++) {
            // console.log(props.array[i].Book + ' ' + props.array[i].Author)
            var result = 'Book:' + props.array[i].Book + ' Author: ' + props.array[i].Author
        }
        document.getElementById('result').innerHTML = result

    }

    return(
        <>
        <div>
            <button onClick={resetData}>Reset</button>
            <button onClick={prevData}>Previous</button>
            <button onClick={nextData}>Next</button>
        </div>
        <div id='result' style={{borderBlockColor:'red', border:'solid'}}></div>
        </>
    )
}