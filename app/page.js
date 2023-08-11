
export default function Home() {
  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-400 p-8">
        <h1 className="font-bold text-xl">Build Web Apps with Next Js</h1>
        <p className="text-opacity-90 text-slate-700">Help me decide what I should build next or how can I improve</p>
      </div>
      <div className="bg-gray-100 px-8 py-2 flex border-b">
        <div className="grow"></div>
        <div>
          <button className="bg-blue-500 py-1 px-4 rounded-md text-white text-opacity-90">Make a suggestion</button>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="flex gap-8 items-center">
          <div>
            <h2>Please post more videos </h2>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Natus totam, provident magni ex maiores
              doloribus minima qui nisi vel fugit adipisci nobis optio consectetur pariatur,
            </p>
          </div>
          <div>
            <button className="shadow-sm border shadow-gray-200 rounded-md py-1 px-4">^80</button>
          </div>

        </div>
      </div>
    </main>
  )
}
