import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const TrackLine = ({
  allCloudinaryMedia,
  classes,
  currentTrack,
  setTrack,
  playing,
  setPlaying,
  track,
  index,
}) => {
  const minutes = `0${Math.floor(track.cloudinaryAudio[0].duration / 60)}`;
  const seconds = `${Math.floor(track.cloudinaryAudio[0].duration % 60)}`;
  const trackDuration = `${minutes}:${seconds}`;
  return (
    <div>
      <button
        className={classNames(
          `${classes.buttonGeneral} ${classes.buttonPaused}`,
          {
            [classes.buttonPlaying]: currentTrack === index && playing,
          }
        )}
        onClick={() => {
          if (currentTrack !== index) setTrack(index);
          if (currentTrack === index) {
            setPlaying(!playing);
          }
        }}
      >
        <img
          src={
            currentTrack === index && playing
              ? allCloudinaryMedia.edges[1].node.url
              : allCloudinaryMedia.edges[0].node.url
          }
          style={{
            width: '10px',
            height: '10px',
            margin: '0px',
          }}
          alt="play-button"
        />
      </button>
      <span
        className={classNames(`${classes.trackButton}`, {
          [classes.trackBold]: currentTrack === index && playing,
        })}
      >
        {index + 1}.
      </span>
      <span
        className={classNames(`${classes.trackButton}`, {
          [classes.trackBold]: currentTrack === index && playing,
        })}
        style={{ marginLeft: '4px' }}
      >
        {track.trackName} -
      </span>
      <span
        className={classNames(`${classes.trackDuration}`, {
          [classes.trackBold]: currentTrack === index && playing,
        })}
      >
        {trackDuration}
      </span>
    </div>
  );
};

export default TrackLine;