import React from "react";
import ShopHeading from "../components/ShopHeading";
import "../css/Shop.css";
import usePriced from "../hooks/usePriced";

const Shop = () => {
  const availableItems = usePriced();

  if (!Array.isArray(availableItems) || availableItems.length <= 0) {
    return (
      <div id="shop">
        <header>
          <ShopHeading />
          <h2>Niestety nie ma aktualnie żadnych prac dostępnych do kupna :(</h2>
          <div className="background"></div>
        </header>
      </div>
    );
  }

  return (
    <div id="shop">
      <header className="flexColumn">
        <ShopHeading />
        <div className="controls">
          <h2>Serdecznie zapraszam :)</h2>
          {availableItems.map((category, index) => (
            <a key={index} href={`#${category.label}`}>
              <button className="flex">
                <span>&#10095;</span>
                {category.label}
              </button>
            </a>
          ))}
        </div>
        <div className="background">
          <img src="/shopBackground.jpg" alt="" />
          <div className="overlay"></div>
        </div>
      </header>
      <div className="gallery flexColumn">
        {availableItems.map((category, index) => (
          <div
            id={category.label}
            key={index}
            className="categoryContainer flexColumn"
          >
            {category.pricedItems.map((object) => (
              <div key={object.id} className="objectContainer flex">
                <img src={object.src} alt={object.title} />
                <div className="info">
                  {/* <span className="flex">
                    &#10077;<h1>{object.title}</h1>&#10078;
                  </span> */}
                  <h1>
                    <span>&#10077;</span>
                    {object.title}
                    <span>&#10078;</span>
                  </h1>
                  <p>{object.method}</p>
                  {object.sizeX && object.sizeY && (
                    <p>
                      {object.sizeX} × {object.sizeY}
                    </p>
                  )}
                  <p>Price: {object.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    // <div id="shop">
    //   <header className="gridCenter">
    //     <div className="heading">
    //       <h1>Obrazy pełne natury, faktury i fikcji</h1>
    //       <h3>Moje podejście do sztuki</h3>
    //       <p>
    //         Tworzenie obrazów to dla mnie nie tylko sposób na wyrażanie siebie,
    //         ale również na uchwycenie złożoności natury oraz jej harmonii z
    //         elementami fikcyjnymi. Moją specjalnością są prace, które łączą
    //         fakturę z bogatymi detalami przyrody, a także surrealistyczne
    //         elementy, które pozwalają na odrobinę fantazji.
    //       </p>
    //       {/* <h3></h3> */}
    //       <p>
    //         Oferuję również tworzenie obrazów na zamówienie, w pełni
    //         dostosowanych do Twoich potrzeb i wizji. Jeśli szukasz unikalnego
    //         dzieła sztuki, które odzwierciedla Twoje ulubione motywy natury,
    //         bogate tekstury lub fikcyjne krajobrazy, z przyjemnością stworzę coś
    //         specjalnego dla Ciebie.
    //       </p>
    //       <div className="availability">
    //         {filteredCategories.length > 0 ? (
    //           <>
    //             <h2>Serdecznie zapraszam :)</h2>
    //             <div className="flexColumn">
    //               {filteredCategories.map((category, index) => (
    //                 <a key={index} href={`#${category.label}`}>
    //                   <button className="flex">
    //                     <span>&#10095;</span>
    //                     {category.label}
    //                   </button>
    //                 </a>
    //               ))}
    //             </div>
    //           </>
    //         ) : (
    //           <h2>
    //             Niestety nie ma aktualnie żadnych prac dostępnych do kupna :(
    //           </h2>
    //         )}
    //       </div>
    //     </div>
    //     <div className="background"></div>
    //   </header>
    //   <div className="gallery flexColumn">
    //     {filteredCategories.length > 0 ? (
    //       filteredCategories.map((category, index) => (
    //         <div
    //           id={category.label}
    //           key={index}
    //           className="categoryContainer flexColumn"
    //         >
    //           {/* <h1>{category.label}</h1> */}
    //           {category.pricedItems.map((object) => (
    //             <div key={object.id} className="objectContainer flex">
    //               <img src={object.src} alt={object.title} />
    //               <div className="info">
    //                 <h1>
    //                   <span>&#10077;</span>
    //                   {object.title}
    //                   <span>&#10078;</span>
    //                 </h1>
    //                 <p>{object.method}</p>
    //                 {object.sizeX && object.sizeY && (
    //                   <p>
    //                     {object.sizeX} × {object.sizeY}
    //                   </p>
    //                 )}
    //                 <p>Price: {object.price}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       ))
    //     ) : (
    //       <p>Nic nie znaleziono :(.</p>
    //     )}
    //   </div>
    // </div>
  );
};

export default Shop;
