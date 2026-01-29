export function WelcomeBanner() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <h1 className="text-4xl font-light text-gray-900 tracking-tight">
                Welcome in, <span className="font-medium">Nixtio</span>
            </h1>

            <div className="flex items-center gap-4 w-full">
                {/* Interviews */}
                <div className="flex flex-col gap-1 w-[15%]">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Interviews</span>
                    <div className="h-12 bg-gray-900 rounded-2xl flex items-center px-4 text-white font-medium shadow-md">
                        15%
                    </div>
                </div>

                {/* Hired */}
                <div className="flex flex-col gap-1 w-[15%]">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Hired</span>
                    <div className="h-12 bg-primary rounded-2xl flex items-center px-4 text-gray-900 font-medium shadow-md shadow-primary/20">
                        15%
                    </div>
                </div>

                {/* Project Time */}
                <div className="flex flex-col gap-1 flex-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project time</span>
                    <div className="h-12 w-full bg-white rounded-2xl relative overflow-hidden flex items-center px-4 text-gray-500 shadow-sm border border-gray-100">
                        {/* Stripes pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
                            backgroundSize: '10px 10px'
                        }}></div>
                        <span className="relative z-10">60%</span>
                    </div>
                </div>

                {/* Output */}
                <div className="flex flex-col gap-1 w-[15%]">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Output</span>
                    <div className="h-12 border border-gray-300 rounded-2xl flex items-center px-4 text-gray-500 font-medium bg-transparent">
                        10%
                    </div>
                </div>
            </div>
        </div>
    );
}
