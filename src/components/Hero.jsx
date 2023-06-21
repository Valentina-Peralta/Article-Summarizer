import React from 'react'
import { logo } from '../assets'

function Hero() {
    return (
        <header>
            <nav>
                <img src={logo} alt='sumz-logo' />
                {/* <button
                    className='github'
                    type='button'
                    onClick={() => window.open('https://github.com/Valentina-Peralta')}
                >
                    GitHub
                </button> */}
            </nav>
            <h1>Summarize Articles with <br /><span className='orange'>OpenAI GPT-4</span></h1>
            <h2>
                Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>)
}

export default Hero