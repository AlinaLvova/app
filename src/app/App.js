import { useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
// import { Routes } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeAllPopups = () => {
    setIsMenuOpen(false);
  };

  const handleOpenMenu = () => {
    console.log('handleOpenMenu app');
    setIsMenuOpen(true);
  };

  return (
    // <Routes>
    <>
      <div className="page">
        <div className="page__sun">
          <Header onMenuButtonClick={handleOpenMenu} />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={closeAllPopups} />
    </>
    // </Routes>
  );
}

export default App;

// import { useState } from "react";

// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Main from "../routes/Main/Main";
// import Menu from "../components/Menu/Menu";

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleOpenMenu = () => {
//     setIsMenuOpen(true);
//   };

//   const closeAllPopups = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="page">
//       <div className="page__sun">
//         {/* <Routes>
//           <Route
//             path="/"
//             element={<Main onMenuButtonClick={handleOpenMenu} />}
//           />
//           <Route
//             path="/"
//             element={<Main onMenuButtonClick={handleOpenMenu} />}
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }
