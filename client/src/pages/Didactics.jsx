import "../css/Didactics.css";

const Didactics = () => {
  return (
    <div id="didactics">
      <header>
        {/* <div className="backgroundNoise">
          <div className="grain"></div>
        </div> */}
        <video autoPlay muted loop>
          <source src="/didacticsHeader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      <div className="content">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div className="heading flex">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sit
            non illum ducimus? Ipsa repellat magni quae, id ex officia?
          </h2>
          <video muted controls>
            <source src="/didacticsAsset.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div className="text flexColumn"> */}
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            recusandae quae placeat pariatur aliquid. Sequi veritatis
            perferendis natus officia? Eius labore veritatis corrupti maxime,
            neque pariatur quaerat. Perspiciatis, atque pariatur!
          </p>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            officiis!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus officia voluptates perferendis eos magni tempore
            nobis vero corporis aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            recusandae quae placeat pariatur aliquid. Sequi veritatis
            perferendis natus officia? Eius labore veritatis corrupti maxime,
            neque pariatur quaerat. Perspiciatis, atque pariatur!
          </p>
        </div>
        <div className="gallery flex">
          <img src="didacticsPhoto1.jpg" alt="" />
          <img src="didacticsPhoto2.jpg" alt="" />
          <img src="didacticsPhoto3.jpg" alt="" />
          <img src="didacticsPhoto4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Didactics;
