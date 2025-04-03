import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function Song({ data }) {
  const { slug } = useParams();
  const song = data.find(song => song.slug === slug);
  const { position: { positionLastWeek, peakPosition, weeksOnChart } } = song;

  return (
    <>
      <img src={song.cover} alt={song.title} />
      <h1>{song.title}</h1>
      <h3>{song.artist}</h3>
      <p>Rank: {song.rank}</p>
      <p>Position Last Week: {positionLastWeek !== null ? positionLastWeek : "N/A"}</p>
      <p>Peak Position: {peakPosition}</p>
      <p>Weeks on Chart: {weeksOnChart}</p>
    </>
  );
}

Song.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
