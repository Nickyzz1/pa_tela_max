import Link from "next/link";
import Image from "next/image";
import perfil from "../assets/img/perfil-of.png"
import imgBg from "@/assets/img/warriorof1.jpg"
import title from "@/assets/img/maxintro.png"

import {Menu} from "@/components/menu"
import {Desc} from "@/components/desc"
import {Footer} from "@/components/footer"

export const Main= ({} : 
{
}


) =>{
    const style = 
    {
        head:"bg-black text-white flex flex-row justify-between",
        menu:"bg-black text-white flex flex-row justify-between",
        perfil: "w-7 cursor-pointer m-2",
        tilte: "m-2",
        imgBg: "flex w-full auto object-cover",
        desc: "bg-black absolute bottom-16 w-full h-1/4 text-white shadow-[0_2px_50px_53px_rgba(0,0,0)] z-10",
        mid: "bg-blue-950 absolute bottom-20 w-full h-1/8 text-white z-20 shadow-[0_2px_90px_86px_#172554]",
        titleSerie:"absolute bottom-52 z-20"

    }

    return(
        <>

            <header>

                <div className={style.head}>
                    <p className={style.tilte}>max</p>
                    <Image className={style.perfil} src={perfil} alt=""/>
                </div>

                <div className={style.menu}>
                    <Menu op1="Home" op2="series" op3="Movies" op4="HBO" op5="New & Movies"/>
                </div>

            </header>

            <main>
                    <div className={style.imgBg}>
                        <Image src={imgBg} alt="" />
                    </div>


                    <div className={style.titleSerie}>
                        <Image src={title} alt="" />
                    </div>

                    <div className={style.desc}>
                        <Desc/>
                    </div>

                    <div className={style.mid}>

                    </div>

                    <div>
                        <Footer/>
                    </div>
            </main>
            

        
        </>
    );
}