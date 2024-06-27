import "./Card.css";

type Props = {
  image: string;
  title: string;
  description: string;
  url: string;
};

const CardComponent = ({ image, title, description, url }: Props) => {
  return (
    <div className="ProjectCardContainer">
      <img className="ImgProjects" src={image} />
      <div className="CardProjectsInfo">
        <div className="texts">
          <h2 style={{ margin: 0 }}>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="ViewCode">
          <p className="OpenGit" onClick={() => window.open(url)}>
            View code
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
