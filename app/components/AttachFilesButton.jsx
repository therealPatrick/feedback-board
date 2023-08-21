import { useState } from "react";
import { MoonLoader } from "react-spinners";

export default function AttachFilesButton({ onNewFiles }) {
    const [isUploading, setIsUploading] = useState(false)
    async function handleAttachFilesInputChange(ev) {
        const files = [...ev.target.files];
        setIsUploading(true);
        const data = new FormData();
        for (const file of files) {
            data.append('file', file);
        }
        const res = await axios.post('/api/upload', data);

        onNewFiles(res.data);
        setIsUploading(false);
    }
    return (
        <label className={"py-2 px-4 gap-2  cursor-pointer"}>
            {isUploading && (
                <MoonLoader size={18} />
            )}
            <span className="{(isUploading ? 'text-gray-300' : 'text-gray-600')}">
                {isUploading ? 'Uploading...' : 'Attach files'}
            </span>
            <input multiple onChange={handleAttachFilesInputChange} type="file" className="hidden" />
        </label>
    )
}