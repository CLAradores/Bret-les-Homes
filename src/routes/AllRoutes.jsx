import { Routes, Route } from 'react-router-dom';
import {
  Home,
  PropertyList,
  PropertyDetails,
  ContactUs,
  AboutUs,
  PageNotFound,
} from '../pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="property/propertyList" element={<PropertyList />} />
        <Route
          path="property//detail?externalID="
          element={<PropertyDetails />}
        />
        <Route path="property/contactUs" element={<ContactUs />} />
        <Route path="property/aboutUs" element={<AboutUs />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
