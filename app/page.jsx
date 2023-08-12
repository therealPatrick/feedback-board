'use client'
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackFormPopup from "./components/FeedbackFormPopup";
import Button from "./components/Button";
import FeedbackItemPopup from "./components/FeedbackItemPopup";

export default function Home() {
  const [showFeedbackPopupForm, setShowFeedBackPopupForm] = useState(false);
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);
  function openFeedbackPopupForm() {
    setShowFeedBackPopupForm(true);
  }

  function opneFeedbackPopItem(feedback) {
    setShowFeedbackPopupItem(feedback);
  }

  const feedbacks = [
    {
      title: 'Please post more videos',
      description: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ',
      votesCount: 80
    },
    {
      title: 'Please post more videos2',
      description: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum2 ',
      votesCount: 40
    },
  ]


  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-400 p-8">
        <h1 className="font-bold text-xl">Build Web Apps with Next Js</h1>
        <p className="text-opacity-90 text-slate-700">Help me decide what I should build next or how can I improve</p>
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
            onOpen={() => opneFeedbackPopItem(feedback)} />
        ))}
      </div>
      {showFeedbackPopupForm && (
        <FeedbackFormPopup setShow={setShowFeedBackPopupForm} />
      )}
      {showFeedbackPopupItem && (
        <FeedbackItemPopup {...showFeedbackPopupItem} setShow={setShowFeedbackPopupItem} />
      )}
    </main>
  )
}
