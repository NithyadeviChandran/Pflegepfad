import React, { createContext, useState, useContext } from "react";

const SlideContext = createContext();


export const SlideProvider = ({ children }) => {
  const [slideData, setSlideData] = useState({ title: "", slides: [] });

  return (
    <SlideContext.Provider value={{ slideData, setSlideData }}>
      {children}
    </SlideContext.Provider>
  );
};

// Custom hook to use SlideContext
export const useSlideData = () => useContext(SlideContext);
