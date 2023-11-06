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

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

// if (!properties) {
//   return showSpinner();
// } else {
//   hideSpinner();
// }

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <React.Suspense>
              <LazyHome />
            </React.Suspense>
          }
        />

        <Route
          path="properties/search"
          element={
            <React.Suspense>
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
