import React, { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");

    // RTK lazy query
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    // Load data from localStorage on mount
    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem("articles")
        );

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingArticle = allArticles.find(
            (item) => item.url === article.url
        );

        if (existingArticle) return setArticle(existingArticle);

        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
    };

    // copy the url and toggle the icon for user feedback
    const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(false), 3000);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };

    return (
        <section className='demo'>
            {/* Search */}
            <div className='search'>
                <form
                    onSubmit={handleSubmit}
                >
                    <img
                        src={linkIcon}
                        alt='link-icon'
                        className='link-icon'
                    />

                    <input
                        type='url'
                        placeholder='Paste the article link'
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        onKeyDown={handleKeyDown}
                        required
                    />
                    <button
                        type='submit'
                        className='submit-btn'
                    >
                        ↵
                    </button>
                </form>

                {/* Browse History */}
                <div className='history-container'>
                    {allArticles.reverse().map((item, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className='link-card'
                        >
                            <div className='copy-btn' onClick={() => handleCopy(item.url)}>
                                <img
                                    src={copied === item.url ? tick : copy}
                                    alt={copied === item.url ? "tick_icon" : "copy_icon"}
                                />
                            </div>
                            <p className='article-url'>
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Display Result */}
            <div className='result-container'>
                {isFetching ? (
                    <img className="loader" src={loader} alt='loader' />
                ) : error ? (
                    <p className='error-msg'>
                        Well, that wasn't supposed to happen...
                        <br />
                        <span >
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='summary-container'>
                            <h2 >
                                Article <span className="blue">Summary</span>
                            </h2>
                            <div className='summary-box'>
                                <div className='copy-summary-btn' onClick={() => handleCopy(article.summary)}>
                                    <img
                                        src={copied === article.summary ? tick : copy}
                                        alt={copied === article.summary ? "tick_icon" : "copy_icon"}
                                    />
                                </div>
                                <p >
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Demo;