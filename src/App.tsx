/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Stories from "./pages/Stories";
import EarningGuide from "./pages/EarningGuide";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Vision from "./pages/Vision";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import Legal from "./pages/Legal";
import FAQ from "./pages/FAQ";
import Referral from "./pages/Referral";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/earning-guide" element={<EarningGuide />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
      </Layout>
    </Router>
  );
}
