const LoadingPage = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="h-[400px] max-w-full grow rounded-lg border p-3 mad:max-w-[300px]">
        <div className="mt-6 space-y-6">
          <div className="h-11 rounded-md border bg-gray-400 px-2">
            <div className="h-11 rounded-md border border-r-8 border-transparent bg-gray-400 px-2" />
            <div className="h-11 rounded-md border border-r-8 border-transparent bg-gray-400 px-2" />
            <div className="h-11 rounded-md border border-r-8 border-transparent bg-gray-400 px-2" />
          </div>
        </div>
      </div>
      <div className="grid grow grid-cols-1 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex gap-3 rounded-xl border p-5">
            <div className="flex flex-none items-center">
              <div className="h-24 w-24 animate-pulse rounded-xl bg-gray-400" />
            </div>
            <div className="flex-grow space-y-4 py-1">
              <div className="space-y-2">
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-400" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-gray-400" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-1/4 animate-pulse rounded bg-gray-400" />
                <div className="h-4 w-1/4 animate-pulse rounded bg-gray-400" />
                <div className="h-4 w-1/4 animate-pulse rounded bg-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage
