'use client';
import { useState } from "react";
import Popup from "./Popup";
import Button from "./Button";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { MoonLoader } from "react-spinners";

export default function FeedbackItem({ onOpen, _id, title, description, votes, onVotesChange }) {
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [isVotesLoading, setIsVotesLoading] = useState(false);
    const { data: session } = useSession();
    const isLoggedIn = !!session?.user?.email;
    function handleVoteButtonClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        if (!isLoggedIn) {
            localStorage.setItem('vote_after_login', _id)
            setShowLoginPopup(true);
        } else {
            setIsVotesLoading(true);
            axios.post('/api/vote', { feedbackId: _id, }).then(async () => {
                await onVotesChange();
                setIsVotesLoading(false);
            });
        }
    }
    async function handleGoogleLoginButtonClick(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        await signIn('google')
    }


    return (
        <a href="" onClick={e => { e.preventDefault(); onOpen(); }} className="my-8 flex gap-8 items-center">
            {_id}
            <div className="flex-grow">
                <h2 className="font-bold">{title} </h2>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
            </div>
            <div>
                {showLoginPopup && (
                    <Popup title={'Confirm your vote'} narrow setShow={setShowLoginPopup}>
                        <div className="p-4">
                            <Button primary onClick={handleGoogleLoginButtonClick}>login with google</Button>
                        </div>
                    </Popup>
                )}
                {JSON.stringify(votes)}
                {!!votes && (
                    <button
                        onClick={handleVoteButtonClick}
                        className="shadow-sm border shadow-gray-200 
                   rounded-md py-1 px-4 
                   flex items-center gap-1 
                   text-gray-600"
                    >
                        {!isVotesLoading && (
                            <>
                                <span className="triangle-vote-up"></span>
                                {votes?.length || '0'}
                            </>
                        )}
                        {isVotesLoading && (
                            <>
                                <MoonLoader size={19} />
                            </>
                        )}
                    </button>
                )}
            </div>

        </a>
    )
}
