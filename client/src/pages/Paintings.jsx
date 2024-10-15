import PaintingsData from "../assets/PaintingsData";
import "../css/Paintings.css";

const Paintings = () => {
  const rowArray = (array, rowSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += rowSize) {
      result.push(array.slice(i, i + rowSize));
    }
    return result;
  };

  const rows = rowArray(PaintingsData, 3);

  return (
    <div id="paintings">
      <div className="gallery flexColumn">
        {rows.map((row, rowIndex) => (
          <div className="rowContainer" key={rowIndex}>
            <div className="row flex">
              {row.map((painting) => (
                <div className="paintingContainer flex" key={painting.id}>
                  <img src={painting.src} alt="" />
                  <div className="description">
                    <h3>{painting.title}</h3>
                    <p>{painting.method}</p>
                    <p>{painting.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//   return (
//     <div id="paintings">
//       <div className="gallery flexColumn">
//         <div className="row flex">
//           <img src="/paintings/20191106_192855.jpg" alt="" />
//           <img src="/paintings/20200601_101800.jpg" alt="" />
//           <img src="/paintings/20200224_125452.jpg" alt="" />
//         </div>
//         <div className="row flex">
//           <img src="/paintings/20200224_125919.jpg" alt="" />
//           <img src="/paintings/20200601_192740.jpg" alt="" />
//           <img src="/paintings/20200609_154100.jpg" alt="" />
//         </div>
//         <div className="row flex">
//           <img src="/paintings/20200609_153859.jpg" alt="" />
//           <img src="/paintings/20200601_193112.jpg" alt="" />
//           <img src="/paintings/20200702_171805.jpg" alt="" />
//         </div>
//         {/* <img src="/paintings/20200601_193112.jpg" alt="" /> */}
//         <div className="row flex">
//           <img src="/paintings/20200702_174520.jpg" alt="" />
//           <img src="/paintings/.jpg" alt="" />
//           <img src="/paintings/.jpg" alt="" />
//         </div>
//         <div className="row flex">
//           <img src="/paintings/.jpg" alt="" />
//           <img src="/paintings/.jpg" alt="" />
//           <img src="/paintings/.jpg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Paintings;
