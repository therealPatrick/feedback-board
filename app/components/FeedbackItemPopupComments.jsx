import { useEffect, useState } from "react";
import Button from "./Button";
import Avatar from "./Avatar";
import CommentForm from "./CommentForm";
import { handleClientScriptLoad } from "next/script";
import axios from "axios";
import Attachment from "./Attachment";
import ReactTimeAgo from "react-time-ago";

export default function FeedbackItemPopupComments(feedbackId) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchComments();
    }, []);
    function fetchComments() {
        axios.get('/api/comment?feedbackId=' + feedbackId).then(res => {
            setComments(res.data);
        })
    }

    return (
        <div className="p-8">
            {comments?.length > 0 && comments.map(comment => (
                <div className="mb-8">
                    <div className="flex gap-4">
                        <Avatar url={comment.user.image} />
                        <div>
                            <p className="text-gray-600">{comment.text}
                            </p>
                            <div className="text-gray-400 mt-2">
                                {comment.user.name} &middot;
                                <ReactTimeAgo
                                    datetime={comment.createdAt}
                                    locale="en_us"
                                /></div>
                            {comment.uploads?.length > 0 && (
                                <div className="flex gap-2 mt-2">
                                    {comment.uploads.map(link => (
                                        <Attachment link={link} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            ))}
            {/*npm i react-time-ago  */}
            <CommentForm feedbackId={feedbackId} onPost={fetchComments} />
        </div>
    )
}