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

        <Route path="properties/propertyList" element={<PropertyList />} />
        <Route path="properties/:externalID" element={<PropertyDetails />} />
        <Route path="properties/contactUs" element={<ContactUs />} />
        <Route path="properties/aboutUs" element={<AboutUs />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
