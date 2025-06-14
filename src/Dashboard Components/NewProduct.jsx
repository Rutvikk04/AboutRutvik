import React from 'react'

const NewProduct = () => {
    return (
        <section className='relative'>
            <div className="grid-overlay" />
            {/* Product tag */}
            <div className="absolute top-6 left-[50%] translate-x-[-50%] z-30 animate__animated animate__fadeInRight animate__delay-1s">
                <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                    <span className="text-sm font-medium text-cyan-300">
                        Personal Latest Product
                    </span>
                    <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-pulse opacity-70" />
                </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-500 opacity-30 floating-element" />
            <div
                className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-green-500 opacity-30 floating-element"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-30 floating-element"
                style={{ animationDelay: "2s" }}
            />
            {/* Main content */}
            <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated tech border */}
                    <div className="tech-border glow-box rounded-xl p-8 md:p-12 relative overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
                        {/* Grid pattern inside */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px)",
                                backgroundSize: "20px 20px"
                            }}
                        />
                        <div className="relative z-10">
                            {/* Title with gradient */}
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 animate__animated animate__fadeInDown">
                                Build, Optimize, and Automate with WebToolsLab
                            </h1>
                            {/* Subtitle with muted color */}
                            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                                A futuristic suite of tools for web developers, designers, and
                                creators. Launch faster, smarter.
                            </p>
                            {/* Glowing CTA button */}
                            <a
                                href="https://webtoolslab.in"
                                target='_blank'
                                className="inline-block glow-button px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s"
                            >
                                <span className="relative z-10">Explore WebToolsLab</span>
                            </a>
                            {/* Tech indicators */}
                            <div className="mt-12 flex flex-wrap justify-center gap-4 animate__animated animate__fadeIn animate__delay-3s">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 pulse" />
                                    <span className="text-sm text-gray-400">AI-Powered</span>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        className="w-2 h-2 rounded-full bg-cyan-500 mr-2 pulse"
                                        style={{ animationDelay: "0.5s" }}
                                    />
                                    <span className="text-sm text-gray-400">Cloud-Native</span>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        className="w-2 h-2 rounded-full bg-green-500 mr-2 pulse"
                                        style={{ animationDelay: "1s" }}
                                    />
                                    <span className="text-sm text-gray-400">Real-Time</span>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        className="w-2 h-2 rounded-full bg-cyan-500 mr-2 pulse"
                                        style={{ animationDelay: "1.5s" }}
                                    />
                                    <span className="text-sm text-gray-400">Secure</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Animated corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500 opacity-30 animate__animated animate__fadeIn" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-green-500 opacity-30 animate__animated animate__fadeIn" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-green-500 opacity-30 animate__animated animate__fadeIn" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500 opacity-30 animate__animated animate__fadeIn" />
        </section>



    )
}

export default NewProduct