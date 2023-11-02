import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  // Home,
  // PropertyList,
  // PropertyDetails,
  ContactUs,
  AboutUs,
  PageNotFound,
} from '../pages';
const LazyHome = React.lazy(() => import('../pages/01_Home'));
const LazyList = React.lazy(() => import('../pages/02_PropertyList'));
const LazyDetails = React.lazy(() => import('../pages/03_PropertyDetails'));

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <React.Suspense fallback="Loading">
              <LazyHome />
            </React.Suspense>
          }
        />

        <Route
          path="properties/propertyList"
          element={
            <React.Suspense fallback="Loading">
              <LazyList />
            </React.Suspense>
          }
        />

        <Route
          path="properties/:externalID"
          element={
            <React.Suspense>
              <LazyDetails />
            </React.Suspense>
          }
        />
        <Route path="properties/contactUs" element={<ContactUs />} />
        <Route path="properties/aboutUs" element={<AboutUs />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
