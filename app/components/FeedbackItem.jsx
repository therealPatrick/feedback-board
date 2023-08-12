export default function FeedbackItem({ onOpen, title, description, votesCount }) {
    return (
        <a href="" onClick={e => { e.preventDefault(); onOpen(); }} className="my-8 flex gap-8 items-center">
            <div>
                <h2 className="font-bold">{title} </h2>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
            </div>
            <div>
                <button className="shadow-sm border shadow-gray-200 rounded-md py-1 px-4 flex items-center gap-1 text-gray-600">
                    <span className="triangle-vote-up"></span>
                    {votesCount}
                </button>
            </div>

        </a>
    )
}
