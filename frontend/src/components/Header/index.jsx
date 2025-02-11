import{ Text, Img} from "./..";
import Link from : "next/link" ;
import React from "react";

export default function Header ({...props }) {
    return(
        <header {...props} className={`${props.className} flex flex-col items-start gap-7`}>
            <Img
            src="img_header_logo.png"
            width={110}
            height={8}
            alt="Headerlogo"
            className="w-[110px] h-[8px] object-contain"
             />
            
            <div className="flex items-center gap-8 self-center md:flex-col">
                <ul className="gap-[30px] flex flex-wrap items-center">
                    <li>
                        <Link href="#" className="lg:text-[18px]">
                            <Text size="text6xl" as="p" className "text-[22.31px] tracking-[-0.20px] font-normal !text-gray-900_02">
                              Китептер
                             </Text>
                        </Link>
                    </li> 
                <li>
                    <Link href="#" className="lg:text-[17px]">
                        <Text size ="text5xl" as "p" className="text-[21.38 px] tracking-[-0.20px] font-normal !text-gray-900_02">
                            Бетселлерлер
                        </Text>
                    </Link>
                </li>
               </ul>
               <Text
                size="text5xl"
                as="p"
                className="lg:text-[17px] text-[21.38px] tracking-[-0.20px] font-normal !text-gray-900_02"  
                >
                    Жаны чыккандар
                </Text>
            </div>
         </header>              
    );
}