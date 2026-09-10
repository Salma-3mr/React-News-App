import placeholder from "./images/placeholder.png";

function NewsCard({ news }) {
  return (
    <ul className="card">
      {news.map((article) => (
        <li className="newsCard" key={article.id}>
          <article className="news_content">

            {/* News image */}
            <div className="photo_place">
              <img
                src={article.image || placeholder}
                alt={article.title}
                className="img_placehold"
              />
            </div>

            {/* News title */}
            <h2 className="news_title">
              {article.title}
            </h2>

            {/* News description */}
            <p className="news_description">
              {article.description}
            </p>

            {/* Read more */}
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="read_more"
            >
              Read More
            </a>

          </article>
        </li>
      ))}
    </ul>
  );
}

export default NewsCard;