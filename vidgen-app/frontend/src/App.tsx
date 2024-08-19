
function App() {
  return (
    <>
      <main className="max-w-5xl mx-auto flex px-4 gap-16">
        <div className="py-8 flex flex-col justify-center">
          <h1 className="text-5xl font-bold uppercase mb-8 text-center">Generate <span className="bg-gradient-to-br from-emerald-500 to-sky-500 bg-clip-text text-transparent">AI-Powered Videos</span> from a URL</h1>
          <form className="grid gap-4">
            <input type="url" placeholder="https://" className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"></input>
            <button type="submit" className="rounded-full bg-emerald-500 px-4 py-2 text-white uppercase font-medium">Create&nbsp;Video</button>
          </form>
        </div>
        <div className="py-12">
          <div className="bg-gray-200 w-[360px] h-[540px] text-gray-500 rounded-2xl p-9">VIDEO</div>
        </div>
      </main>
    </>
  )
}

export default App
