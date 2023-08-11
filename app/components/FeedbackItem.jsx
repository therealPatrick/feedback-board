export default function FeedbackItem() {
    return (
        <div className="my-8 flex gap-8 items-center">
            <div>
                <h2 className="font-bold">Please post more videos </h2>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Natus totam, provident magni ex maiores
                    doloribus minima qui nisi vel fugit adipisci nobis optio consectetur pariatur,
                </p>
            </div>
            <div>
                <button className="shadow-sm border shadow-gray-200 rounded-md py-1 px-4 flex items-center gap-1 text-gray-600">
                    <span className="triangle-vote-up"></span>

                    80
                </button>
            </div>

        </div>
    )
}
