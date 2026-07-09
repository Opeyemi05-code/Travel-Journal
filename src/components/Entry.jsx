export default function Entry(props) {
  return (
    <>
      <article>
        <div className="main-image-container">
          <img
            src={props.entry.img}
            alt={props.entry.alt}
            className="main-image"
          />
        </div>

        <div className="entry-details">
          <div className="entry-location">
            <img
              src={props.entry.location}
              alt="location icon"
              className="location-logo"
            />
            <p>{props.entry.country}</p>

            <a
              href={props.entry.googleMapsLink}
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </div>

          <h1>{props.entry.title} </h1>
          <h2>{props.entry.dates} </h2>

          <p>{props.entry.description}</p>
        </div>
      </article>
    </>
  );
}
