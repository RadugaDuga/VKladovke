import React from 'react'
import s from "./NF404.module.css"
import image404 from "../../images/404/NF404.svg"



const NF404 = () => {
    return (
        <div className={s.container}>
            <div className={s.contentBox}>
                <img src={image404} alt="" className={s.image}/>
            </div>
        </div>
    )
}


export default NF404