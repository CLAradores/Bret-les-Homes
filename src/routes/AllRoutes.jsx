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
        <Route path="/" element={<Home />} />

        <Route path="propertyList" element={<PropertyList />} />
        <Route path="properDetails" element={<PropertyDetails />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="aboutUs" element={<AboutUs />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
