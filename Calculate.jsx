import React, { useState } from 'react'

export const Calculate = () => {


    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [ans,setAns] = useState();

    function add(){
        setAns(Number(num1) + Number(num2));

    }
    function sub(){
        setAns(Number(num1) - Number(num2));

    }
    function multi(){
        setAns(Number(num1) * Number(num2));

    }
    function divide(){
        setAns(Number(num1) / Number(num2));

    }


    return (
    <>
    <div className="container">
        <form action="">
            <div className="form-control">
                <label>Input1</label>
                <input className='form-control' placeholder='Enter a value' value={num1} onChange={(e) => {
                    setNum1(e.target.value)
                } }/>
            </div>
            <div className="form-control">
                <label>Input1</label>
                <input className='form-control' placeholder='Enter a value' value={num2} onChange={(e) => {
                    setNum2(e.target.value)
                }} />
            </div>
            <div className="button">
                <button className="btn btn-secondary mb-3" type='submit' onClick={add} >Addition</button>
            </div>
            <div className="button">
                <button className="btn btn-secondary mb-3" type='submit' onClick={sub} >Subtraction</button>
            </div>
            <div className="button">
                <button className="btn btn-secondary mb-3" type='submit' onClick={multi} >multiplication</button>
            </div>
            <div className="button">
                <button className="btn btn-secondary mb-3" type='submit' onClick={divide} >divition</button>
            </div>
            <h1>Result: {ans}</h1>

        </form>
    </div>

    </>


  )
}
