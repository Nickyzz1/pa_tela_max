import Image from "next/image";
import Link from "next/link";
import perfil from '../app/assets/img/perfil-of.png'
import bg from "../app/assets/img/warriorof1.jpg"

import home from "@/assets/img/home.png"
import book from "@/assets/img/book.png"
import lupa from "@/assets/img/lupa.png"


export const Footer = ({} : 
{
 
}

) =>{
    const style = 
    {
        p:"text-center text-white mx-16 text-xs",
        img: "w-8 z-100",
        footer: "flex-row flex bg-transp absolute bottom-0 bg-black w-full bootom-0 absolute z-50 justify-evenly p-4"
    }

    return(
        <>

        <div className={style.footer}>
            <Image className={style.img} src={home} alt="" />
            <Image className={style.img} src={book} alt="" />
            <Image className={style.img} src={lupa} alt="" />
        </div>

        </>
    );
}