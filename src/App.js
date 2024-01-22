import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

export default function App() {

    const [newsArticles , setNewsArticles] = useState([]);
    const alanKey = '9d28cfe9d902e81fd3728925e586d3f42e956eca572e1d8b807a3e2338fdd0dc/stage';

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                } 
            },
        });
    }, []);

    return (
    <div >


    <NewsCards articles={newsArticles}/>
    </div>
    
    );
}
