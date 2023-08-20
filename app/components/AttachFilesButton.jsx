export default function AttachFilesButton() {
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