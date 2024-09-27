import Link from "next/link";
import Image from "next/image";
import perfil from "../assets/img/perfil-of.png"
import imgBg from "@/assets/img/warriorof1.jpg"

import {Desc} from "@/components/desc"

export const Menu= ({op1, op2, op3, op4, op5} : 
{
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
}


) =>{

    const style = {
        p: "m-2"
    }


    return(
        <>

            <p className={style.p}>{op1}</p>
            <p className={style.p}>{op2}</p>
            <p className={style.p}>{op3}</p>
            <p className={style.p}>{op4}</p>
            <p className={style.p}>{op5}</p>

        </>
    );
}