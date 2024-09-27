import Link from "next/link";
import Image from "next/image";
import perfil from "../assets/img/perfil-of.png"
import imgBg from "@/assets/img/warriorof1.jpg"
import title from "@/assets/img/maxintro.png"
import logo from "@/assets/img/logo.png"
import serie1 from "@/assets/img/comoeueraantesdevc.jpg"
import serie2 from "@/assets/img/friends.webp"

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
        menu:"bg-black text-white flex flex-row justify-between shadow-[0_5px_34px_23px_#171717] absolute w-full",
        perfil: "w-7 cursor-pointer m-2 mr-4",
        logo: "w-14 cursor-pointer m-2 z-50",
        tilte: "m-2",
        imgBg: "flex w-full auto object-cover",
        desc: "bg-black absolute bottom-16 w-full h-1/4 text-white shadow-[0_2px_50px_53px_#171717] z-10",
        mid: "bg-blue-950 absolute bottom-20 w-full h-1/8 text-white z-20 shadow-[0_2px_90px_86px_#172554]",
        titleSerie:"absolute bottom-52 z-20",
        bolinha: "h-2 w-2 bg-white rounded-full",
        box:"flex flex-row justify-center gap-3",
        content: "flex flex-row justify-center gap-24",
        img: "w-20 object-cover",
        fy: "flex pl-4",
        footer:"flex bottom-0",
        all: "h-full"

    }

    return(
        <>

            <header>

                <div className={style.head}>
                <Image className={style.logo} src={logo} alt=""/>
                    <Image className={style.perfil} src={perfil} alt=""/>
                </div>

                <div className={style.menu}>
                    <Menu op1="Home" op2="series" op3="Movies" op4="HBO" op5="New & Movies"/>
                </div>

            </header>

            <main className={style.all}>
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
                            <div className={style.box}>
                                <div className={style.bolinha}></div>
                                <div className={style.bolinha}></div>
                                <div className={style.bolinha}></div>
                                <div className={style.bolinha}></div>
                                <div className={style.bolinha}></div>
                                <div className={style.bolinha}></div>
                            </div>

                            <p className={style.fy} >For you</p>
                    </div>

                    <div className={style.content}>

                            <Image className={style.img} src={serie1} alt=""/>
                            <Image className={style.img} src={serie2} alt=""/>


                    </div>

                    <div className={style.footer}>
                        <Footer/>
                    </div>
            </main>
            

        
        </>
    );
}