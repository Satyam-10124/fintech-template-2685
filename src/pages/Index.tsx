
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        
        {/* CompliLedger Portal Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="cosmic-glass overflow-hidden">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold tracking-tight">CompliLedger</h2>
                    </div>
                    <h3 className="text-4xl font-bold tracking-tighter">
                      AI-Powered Compliance Verification Platform
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      OSCAL-integrated hybrid on-chain AI SBOM verification with blockchain anchoring. 
                      Independent auditor verification with NIST-standardized reporting.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        AI-powered security analysis with automated control mapping
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Blockchain-anchored compliance evidence on Algorand
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Official NIST OSCAL documentation generation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Dual-portal architecture for companies and auditors
                      </li>
                    </ul>
                    <Button asChild size="lg" className="text-lg px-8">
                      <Link to="/compli">
                        Launch CompliLedger
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="cosmic-glass">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-green-500 mb-2">&lt;2min</div>
                        <p className="text-sm text-muted-foreground">Verification Time</p>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-blue-500 mb-2">100%</div>
                        <p className="text-sm text-muted-foreground">OSCAL Compliant</p>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-purple-500 mb-2">∞</div>
                        <p className="text-sm text-muted-foreground">Blockchain Proof</p>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-orange-500 mb-2">AI</div>
                        <p className="text-sm text-muted-foreground">Enhanced Speed</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
