import { useState } from "react";
import Button from "./Button";
import AttachFilesButton from "./AttachFilesButton";

export default function CommentForm() {
    const [commentText, setCommentText] = useState('');
    const [uploads, setUploads] = useState([])

    function addUploads(newLinks) {
        setUploads(prevLinks => [...prevLinks, ...newLinks])
    }
    return (
        <form>
            <textarea
                className="border rounded-md w-full p-2"
                placeholder="Let us know what you think..."
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-2">
                <AttachFilesButton onNewFiles={addUploads} />
                <Button primary disabled={commentText === ''}>Comment</Button>
            </div>
        </form>
    )
}