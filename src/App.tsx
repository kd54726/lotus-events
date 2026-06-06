/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CorporateClients } from "./components/CorporateClients";
import { Statistics } from "./components/Statistics";
import { SplitFunnels } from "./components/SplitFunnels";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { EventCategories } from "./components/EventCategories";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { StickyActions } from "./components/StickyActions";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 relative selection:bg-lotus-blue/30 selection:text-dark-navy">
      <Header />
      <Hero />
      <CorporateClients />
      <Statistics />
      <SplitFunnels />
      <Process />
      <WhyChooseUs />
      <EventCategories />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
      <StickyActions />
    </main>
  );
}
