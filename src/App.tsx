import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import Education from "./components/Education.tsx";
import Employment from "./components/Employment.tsx";
import Certifications from "./components/Certifications.tsx";
import References from "./components/References.tsx";
import Projects from "./components/Projects.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const AppDiv = styled.div`
  max-width: 70%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex: 1; 
  background-color: white;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ContentDiv = styled.div`
  flex: 1;
  padding: 20px;
`;

function Root() {
  return (
    <>
      <AppDiv>
        <Header />
        <MainDiv>
          <Nav />
          <ContentDiv>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/employment" element={<Employment />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/references" element={<References />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </ContentDiv>
        </MainDiv>
        <Footer />
      </AppDiv>
    </>
  );
}

const router = createBrowserRouter([
  { path: "*", Component: Root }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

