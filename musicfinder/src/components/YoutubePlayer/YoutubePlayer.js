import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const YoutubePlayer = (props) => {

  return (
    <PlayerContainer>
      <div className="player-wrapper">
        <ReactPlayer
              className='react-player'
              width='100%'
              height='100%'
              url={`https://www.youtube.com/embed/${urlConstructor(props.track.video_id, props.playlist)}`}
              playing={true}
              controls={true}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={() => {
                console.log('ended')
                props.playNext()
              }}
              // onError={e => console.log('onError', e)}
            />
      </div>
    </PlayerContainer>
  )

  function urlConstructor(id, playlist) {
    if (playlist) {
      return `${id}?list=${playlist}`;
    } else {
      return `${id}`
      // return `Vrd8uDWRmx0`;
    }
  }
}
const PlayerContainer = styled.div`
  width: 100%;
  margin-top: 11px;
  margin-left: 5px;
  z-index: 0;
  position: relative;
  
  .player-wrapper {
    height: 100%;
    width: 100%;
    #player {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0px;
    }
  }

  @media (max-width: 800px){
    margin-left: 0;
    margin-right: 0;
    .player-wrapper{
      height: 50vw;
    }
  }
    
`;

export default YoutubePlayer;
