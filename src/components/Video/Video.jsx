const Video = ({active, src}) => {
  return <video className={active ? 'active' : ''} src={src} autoPlay muted loop/>
}

export default Video;
