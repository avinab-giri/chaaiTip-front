
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

interface LinkBtnProps{
    'classname'?: string;
    'name': string;
    'href'?: string;
    'target'?: string;
}

const LinkBtn:React.FC<LinkBtnProps> = ({classname,name,href,target}) => {
  return (
    <Link className={`flex items-center gap-1 hover:gap-2 transition-all hover:pl-1 py-2 text-sm font-bold ${classname}`} href={href as string} target={target}>{name} <IoIosArrowForward /></Link>
  )
}

export default LinkBtn