import { useState, useEffect } from 'react';
export function useGetScrollHeight() {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const getHeight = () => {
            const landingPage = document.querySelector('.landing-page-container')
            const content = document.querySelector('.content')
            let LPHeight, contentHeight, totalHeight;
            LPHeight = landingPage.getBoundingClientRect().height;
            contentHeight = content.getBoundingClientRect().height;
            totalHeight = Math.round(LPHeight + contentHeight + 200);
            setScrollHeight(totalHeight)
        }

        window.addEventListener('load', getHeight)

        return () => {
            window.removeEventListener('load', getHeight)
        }
    }, [])

    return scrollHeight
}
