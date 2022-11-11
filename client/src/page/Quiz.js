import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import sample from 'lodash.sample';

import { DISPLAY_INTERVAL } from '../config/config';
import { allData } from '../data/kanjiData';
import { getFailureEmoji, getSuccessEmoji } from '../utils';
import { FlipCard } from '../components/FlipCard';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    position: fixed;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: #C7D2FE;
    user-select: none;
    overscroll-behavior-y: contain;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AppCont = styled(animated.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Emoji = styled.span`
  font-size: 3em;
`;

export default function Quiz() {

    const appContStyle = useSpring({ to: { top: 0 }, from: { top: -1000 } });
    const [cardVisible, setCardVisible] = useState(true);
    const [hintVisible, setHintVisible] = useState(true);
    const [reaction, setReaction] = useState('');
    const [card, setCard] = useState(sample(allData));

    const handleSwipe = swipe => {
        if (hintVisible) setHintVisible(false);
        setReaction(swipe < 0 ? getFailureEmoji() : getSuccessEmoji());
        setCardVisible(false);
        setCard(sample(allData));
        setTimeout(() => setCardVisible(true), DISPLAY_INTERVAL);
    };

    return(
        <>
            <GlobalStyle/>
            <AppCont style={appContStyle}>
                {cardVisible ? (
                    <FlipCard
                    data={card}
                    onSwipeLeft={handleSwipe}
                    onSwipeRight={handleSwipe}
                    hintVisible={hintVisible}
                    />
                ) : (
                    <Emoji>{reaction}</Emoji>
                )}
            </AppCont>
        </>
    )
}