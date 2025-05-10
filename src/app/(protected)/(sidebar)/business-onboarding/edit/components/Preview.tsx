import React from "react";

export const Preview = () => {
  return (
    <div className="sticky top-6">
      <h3 className="text-lg font-medium mb-4">Preview</h3>
      <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto">
        {/* Phone Frame */}
        <div className="absolute inset-0 border-[12px] border-black rounded-[40px] bg-black shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-20" />

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-6 text-white text-xs z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 20.9994C16.4183 20.9994 20 17.4177 20 12.9994C20 8.58107 16.4183 4.99939 12 4.99939C7.58172 4.99939 4 8.58107 4 12.9994C4 17.4177 7.58172 20.9994 12 20.9994Z" />
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 9.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V9.5C22 16.4036 16.4036 22 9.5 22C2.59644 22 2 16.4036 2 9.5Z" />
              </svg>
              <span>100%</span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="h-full w-full bg-[rgb(255,109,0)] rounded-[28px] p-4 flex flex-col relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="grid grid-cols-8 gap-4 p-4">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full bg-white/20"
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-32 bg-white/10 rounded-lg" />
                <div className="h-12 w-12 bg-white/10 rounded-full" />
              </div>

              {/* Card Info */}
              <div className="space-y-2 mb-8">
                <h3 className="text-white text-lg font-medium">
                  Coffee Rewards
                </h3>
                <p className="text-white/80 text-sm">
                  Collect 10 stamps to earn a free coffee
                </p>
              </div>

              {/* Stamps Grid */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full bg-white/20 p-2"
                  >
                    {i === 0 && (
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-[rgb(255,109,0)]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Info */}
              <div className="space-y-4">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[10%] bg-white rounded-full" />
                </div>
                <p className="text-white text-sm">
                  9 more stamps until your free coffee!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Buttons */}
      <div className="flex justify-center gap-2 mt-6">
        <button className="p-2 rounded bg-muted hover:bg-muted/80 transition-colors">
          <span className="sr-only">iOS Preview</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6c0-1.1-.9-2-2-2h-2a2 2 0 0 0-2 2" />
            <path d="M14 4h-4a2 2 0 0 0-2 2" />
            <path d="M8 6c0-1.1.9-2 2-2" />
            <path d="M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
            <path d="M12 16v.01" />
            <path d="M8 12h8" />
            <path d="M12 12v4" />
          </svg>
        </button>
        <button className="p-2 rounded bg-muted hover:bg-muted/80 transition-colors">
          <span className="sr-only">Android Preview</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
          </svg>
        </button>
        <button className="p-2 rounded bg-muted hover:bg-muted/80 transition-colors">
          <span className="sr-only">Share Preview</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </button>
      </div>
    </div>
  );
};
