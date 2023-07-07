import "./ChangingShapes.css";

function ChangingShape({ shapeSize }) {
  return (
    <div className="blob" style={{minHeight:`${shapeSize}px`, minWidth:`${shapeSize}px`}}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <pattern
          id="grainyPattern"
          width="2"
          height="2"
          patternUnits="userSpaceOnUse"
        >
          <rect width="1" height="1" fill="#464646" />
          <rect x="1" y="1" width="1" height="1" fill="#000000" opacity="0.1" />
        </pattern>
        <path fill="url(#grainyPattern)" transform="translate(100 100)">
          <animate
            attributeName="d"
            dur="3000ms"
            repeatCount="indefinite"
            values="M31.6,-52.2C41.6,-42.7,50.7,-35.1,58.1,-24.8C65.4,-14.6,70.8,-1.8,71,11.6C71.2,25,66.2,39,57.7,51.4C49.2,63.8,37.1,74.5,23.1,78.4C9.2,82.3,-6.6,79.4,-20.3,73.4C-33.9,67.4,-45.4,58.3,-51.7,47C-58,35.7,-59.2,22.2,-64.6,7.2C-69.9,-7.7,-79.4,-24.2,-78.2,-39.4C-77,-54.6,-65,-68.6,-50.2,-75.8C-35.4,-83.1,-17.7,-83.6,-3.4,-78.2C10.8,-72.9,21.6,-61.7,31.6,-52.2Z;
            M43.4,-68.2C53.4,-61.2,56.6,-44.2,56.4,-30.1C56.2,-15.9,52.6,-4.4,53.9,9.9C55.2,24.2,61.4,41.4,56.6,51.6C51.7,61.7,35.8,64.9,20.5,68.8C5.2,72.8,-9.5,77.6,-20.4,72.9C-31.3,68.1,-38.4,53.8,-50.7,42.4C-63,31,-80.5,22.5,-81.6,12C-82.7,1.4,-67.5,-11.2,-58.7,-25.3C-49.9,-39.3,-47.5,-54.8,-38.8,-62.4C-30.1,-70,-15.1,-69.7,0.8,-71C16.7,-72.3,33.4,-75.2,43.4,-68.2Z;
            M25.1,-39.2C37.4,-31.2,55.7,-32.5,61.8,-26.1C67.8,-19.8,61.7,-5.9,54.5,4.1C47.2,14.1,38.8,20.2,32.1,27.7C25.4,35.1,20.4,43.9,13.6,45.6C6.7,47.4,-2.1,42.2,-8.6,36.8C-15.1,31.4,-19.4,26,-24.6,20.8C-29.8,15.7,-36,10.9,-43.5,2.2C-50.9,-6.4,-59.7,-18.8,-59.8,-30.9C-59.8,-42.9,-51.2,-54.5,-39.7,-62.9C-28.3,-71.3,-14.2,-76.5,-3.9,-70.5C6.4,-64.4,12.8,-47.2,25.1,-39.2Z;
            M31.6,-52.2C41.6,-42.7,50.7,-35.1,58.1,-24.8C65.4,-14.6,70.8,-1.8,71,11.6C71.2,25,66.2,39,57.7,51.4C49.2,63.8,37.1,74.5,23.1,78.4C9.2,82.3,-6.6,79.4,-20.3,73.4C-33.9,67.4,-45.4,58.3,-51.7,47C-58,35.7,-59.2,22.2,-64.6,7.2C-69.9,-7.7,-79.4,-24.2,-78.2,-39.4C-77,-54.6,-65,-68.6,-50.2,-75.8C-35.4,-83.1,-17.7,-83.6,-3.4,-78.2C10.8,-72.9,21.6,-61.7,31.6,-52.2Z;
           "
          ></animate>
        </path>
      </svg>
    </div>
  );
}

export default ChangingShape;
