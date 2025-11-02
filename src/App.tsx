function App() {
  return (
    <div className="mx-auto h-[812px] w-full max-w-[375px] md:h-[960px] md:max-w-7xl">
      <div className="flex h-full w-full items-center justify-center bg-slate-300">
        <div
          id="card"
          className="card-shadow w-[320px] space-y-7 rounded-[20px] bg-white p-4 pb-10"
        >
          <img
            src="/images/image-qr-code.png"
            alt="QR Code"
            className="rounded-lg"
          />
          <div className="space-y-4 px-4">
            <h2 className="text-preset-1 text-center text-slate-900">
              Improve your front-end skills by building projects
            </h2>
            <p className="text-preset-2 text-center text-slate-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
