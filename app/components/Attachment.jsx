import Image from "next/image";
import PaperClip from "./icons/PaperClip";
import Trash from "./icons/Trash";

export default function Attachment({ link, showRemoveButton = false, handleRemoveFileButtonClick }) {
    return (
        <a href={link} target="_blank" className="h-16 relative">
            {showRemoveButton && (
                <button onClick={ev => handleRemoveFileButtonClick(ev, link)} className="-right-2 -top-2 absolute bg-red-400 p-1 rounded-md  text-white">
                    <Trash />
                </button>
            )}
            {(link.endsWith('.jpg') || link.endsWith('.png')) ? (
                <Image className="h-16 w-auto rounded-md" src={link} alt="" />
            ) : (
                <div className="bg-gray-200 h-16 p-2 flex items-center rounded-md">
                    <PaperClip className="w-4 h-4" />
                    {link.split('/')[3].substring(13)}
                </div>
            )}
        </a>
    )
}