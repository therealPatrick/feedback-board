'use client'
import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackFormPopup from "./FeedbackFormPopup";
import Button from "./Button";
import FeedbackItemPopup from "./FeedbackItemPopup";
import axios from "axios";
import { useSession } from "next-auth/react";


export default function Board() {

    const [showFeedbackPopupForm, setShowFeedBackPopupForm] = useState(false);
    const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);
    const [feedbacks, setFeedbacks] = useState([])
    const [votesLoading, setVotesLoading] = useState(false)
    const [votes, setVotes] = useState([]);
    const { data: session } = useSession();
    useEffect(() => {
        axios.get('api/feedback').then(res => {
            setFeedbacks(res.data);
        })
    }, []);
    useEffect(() => {
        fetchVotes()
    }, [feedbacks])
    useEffect(() => {
        if (session?.user?.email) {
            const feedbackId = localStorage.getItem('vote_after_login');
            if (feedbackId) {
                axios.post('/api/vote', { feedbackId }).then(() => {
                    localStorage.removeItem('vote_after_login');
                    fetchVotes();
                })
            }
        }
    }, [session?.user?.email]);
    async function fetchVotes() {
        setVotesLoading(true)
        const ids = feedbacks.map(f => f._id)
        const res = await axios.get('/api/vote?feedbackIds=' + ids.join(','));
        setVotes(res.data);
        setVotesLoading(false);
    }

    function openFeedbackPopupForm() {
        setShowFeedBackPopupForm(true);
    }

    function opneFeedbackPopItem(feedback) {
        setShowFeedbackPopupItem(feedback);
    }


    return (
        <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
            {session?.user?.email || 'not logged in'}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-400 p-8">
                <h1 className="font-bold text-xl">Build Web Apps with Next Js</h1>
                <p className="text-opacity-90 text-slate-700">Help me decide what I should build next or how can I improve?</p>
            </div>
            <div className="bg-gray-100 px-8 py-4 flex border-b">
                <div className="grow"></div>
                <div>

                    <Button primary onClick={openFeedbackPopupForm}>Make a suggestion</Button>
                </div>
            </div>
            <div className="px-8 ">
                {feedbacks.map(feedback => (
                    <FeedbackItem {...feedback}
                        onVotesChange={fetchVotes}
                        votes={votes.filter(v => v.feedbackId.toString() === feedback._id.toString())}
                        parentLoadingVotes={votesLoading}
                        onOpen={() => opneFeedbackPopItem(feedback)}
                    />
                ))}
            </div>
            {showFeedbackPopupForm && (
                <FeedbackFormPopup setShow={setShowFeedBackPopupForm} />
            )}
            {showFeedbackPopupItem && (
                <FeedbackItemPopup {...showFeedbackPopupItem}
                    votes={votes.filter(v => v.feedbackId.toString() === showFeedbackPopupItem._id)}
                    onVotesChange={fetchVotes}
                    setShow={setShowFeedbackPopupItem} />
            )}
        </main>
    );
}