import { useState } from "react";
import Button from "./Button";
import Avatar from "./Avatar";
import CommentForm from "./CommentForm";
import { handleClientScriptLoad } from "next/script";

export default function FeedbackItemPopupComments(feedbackId) {

    return (
        <div className="p-8">
            <div className="flex gap-4 mb-8">
                <Avatar />
                <div>
                    <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Beatae quisquam nobis praesentium.
                    </p>
                    <div className="text-gray-400 mt-2">Anonymous &middot; a few seconds ago</div>
                </div>
            </div>
            <CommentForm feedbackId={feedbackId} />
        </div>
    )
}