import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category/Category";

const AppRouter = () => {
  return (
    <Routes basename="/lm-test">
      <Route path="/" element={<Category />} />
      <Route path="/:categoryId" element={<Category />} />
      <Route path="*" element={<Category />} />
    </Routes>
  );
};

export default AppRouter;
