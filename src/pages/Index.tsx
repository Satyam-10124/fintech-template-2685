
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
        
        {/* CompliLedger PoC Implementation Plan Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="cosmic-glass overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center space-y-8 mb-12">
                  <div className="flex items-center justify-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tight">CompliLedger PoC</h2>
                  </div>
                  <h3 className="text-4xl font-bold tracking-tighter">
                    7-Day Implementation Plan
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Working proof-of-concept demonstrating AI-powered compliance verification with blockchain anchoring, 
                    OSCAL-standardized reporting, and independent auditor verification.
                  </p>
                </div>

                {/* Core User Flows */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <Card className="cosmic-glass">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Company Flow (Submit & Verify)
                      </h4>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">1</span>
                          <span>Upload SBOM/Smart Contract</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">2</span>
                          <span>Select Compliance Standard</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">3</span>
                          <span>AI Analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">4</span>
                          <span>Blockchain Verification</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">5</span>
                          <span>Download OSCAL Reports</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cosmic-glass">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Auditor Flow (Independent Verification)
                      </h4>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 text-xs flex items-center justify-center">1</span>
                          <span>Search Controls/Artifacts</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 text-xs flex items-center justify-center">2</span>
                          <span>View Claims</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 text-xs flex items-center justify-center">3</span>
                          <span>Verify on Blockchain</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 text-xs flex items-center justify-center">4</span>
                          <span>Download Official OSCAL Documents</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Architecture Stack */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-6">Architecture Stack</h4>
                  <div className="grid md:grid-cols-5 gap-4 text-sm">
                    <Card className="cosmic-glass">
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">Frontend</div>
                        <div className="text-muted-foreground">React/Vercel</div>
                        <div className="text-xs text-muted-foreground mt-1">Company + Auditor portals</div>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">Backend</div>
                        <div className="text-muted-foreground">Node.js</div>
                        <div className="text-xs text-muted-foreground mt-1">OSCAL generation, AI orchestration</div>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">Blockchain</div>
                        <div className="text-muted-foreground">Algorand Testnet</div>
                        <div className="text-xs text-muted-foreground mt-1">Immutable verification anchoring</div>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">AI</div>
                        <div className="text-muted-foreground">Python service</div>
                        <div className="text-xs text-muted-foreground mt-1">Security analysis and control mapping</div>
                      </CardContent>
                    </Card>
                    <Card className="cosmic-glass">
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">Storage</div>
                        <div className="text-muted-foreground">IPFS</div>
                        <div className="text-xs text-muted-foreground mt-1">OSCAL document storage with CID anchoring</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Success Criteria */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <Card className="cosmic-glass">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-green-500 mb-2">&lt;2min</div>
                      <p className="text-sm text-muted-foreground">Verification Time</p>
                    </CardContent>
                  </Card>
                  <Card className="cosmic-glass">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-blue-500 mb-2">100%</div>
                      <p className="text-sm text-muted-foreground">OSCAL Compliance</p>
                    </CardContent>
                  </Card>
                  <Card className="cosmic-glass">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-500 mb-2">🔗</div>
                      <p className="text-sm text-muted-foreground">Blockchain Proof</p>
                    </CardContent>
                  </Card>
                  <Card className="cosmic-glass">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-2">🔍</div>
                      <p className="text-sm text-muted-foreground">Auditor Verification</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Competitive Advantages */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center space-y-2">
                    <h5 className="font-semibold text-sm">Standards-First</h5>
                    <p className="text-xs text-muted-foreground">Official OSCAL compliance, not proprietary format</p>
                  </div>
                  <div className="text-center space-y-2">
                    <h5 className="font-semibold text-sm">Trust Through Verification</h5>
                    <p className="text-xs text-muted-foreground">Blockchain proof eliminates "trust us" problem</p>
                  </div>
                  <div className="text-center space-y-2">
                    <h5 className="font-semibold text-sm">AI-Enhanced Speed</h5>
                    <p className="text-xs text-muted-foreground">Minutes instead of weeks for verification</p>
                  </div>
                  <div className="text-center space-y-2">
                    <h5 className="font-semibold text-sm">Dual-Portal Architecture</h5>
                    <p className="text-xs text-muted-foreground">Protects IP while enabling verification</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/company">
                      Launch Demo Portal
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
