import axios from "axios";
import Button from "./Button";
import FeedbackItemPopupComments from "./FeedbackItemPopupComments";
import Popup from "./Popup";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { useSession } from "next-auth/react";
import Tick from "./icons/Tick";
import Attachment from "./Attachment";

export default function FeedbackItemPopup({ _id, title, description, setShow, votes, onVotesChange, uploads }) {
    const [isVotesLoading, setIsVotesLoading] = useState(false)
    const { data: session } = useSession()
    function handleVoteButtonClick() {
        setIsVotesLoading(true);
        axios.post('/api/vote', { feedbackId: _id }).then(async () => {
            await onVotesChange();
            setIsVotesLoading(false);
        })
    }
    const iVoted = votes.find(v => v.userEmail === session?.user?.email);
    return (
        <Popup title={''} setShow={setShow}>
            <div className="p-8 pb-2">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
                {uploads?.length > 0 && (
                    <div className="flex gap-2 mt-4">
                        {uploads.map(link => (
                            <Attachment />
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-end px-8 py-2 border-b">
                <Button primary onClick={handleVoteButtonClick}>
                    {isVotesLoading && (
                        <MoonLoader size={19} />
                    )}
                    {!isVotesLoading && (
                        <>
                            {iVoted && (
                                <>
                                    <Tick className="w4 h-4" />
                                    Upvoted {votes?.length || '0'}
                                </>
                            )}
                            {!iVoted && (
                                <>
                                    <span className="triangle-vote-up"></span>
                                    Upvote {votes?.length || '0'}
                                </>
                            )}
                        </>
                    )}
                </Button>
            </div>
            <div>
                <FeedbackItemPopupComments />
            </div>
        </Popup>
    )
}
