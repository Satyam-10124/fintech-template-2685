
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, FileCheck, ExternalLink, ArrowRight, CheckCircle, Zap, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen bg-background cosmic-grid">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary icon-glow" />
            <h1 className="text-2xl font-bold tracking-tight">CompliLedger</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</a>
            <a href="#architecture" className="text-sm hover:text-primary transition-colors">Architecture</a>
            <Button asChild variant="outline" size="sm">
              <Link to="/company">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="space-y-20">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6">
              <Badge className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
                🚀 OSCAL-Integrated Compliance Platform
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter">
                AI-Powered
                <br />
                <span className="text-primary">Compliance</span>
                <br />
                Verification
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Hybrid on-chain AI SBOM verification with blockchain anchoring, 
                NIST OSCAL-standardized reporting, and independent auditor verification. 
                <span className="text-primary font-semibold">Minutes instead of weeks.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-10 py-6 h-auto">
                <Link to="/company">
                  Start Company Portal
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 h-auto">
                <Link to="/auditor">
                  Auditor Verification
                  <Users className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-green-500">&lt;2min</div>
                <p className="text-sm text-muted-foreground">Verification Time</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-500">100%</div>
                <p className="text-sm text-muted-foreground">OSCAL Compliant</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-purple-500">∞</div>
                <p className="text-sm text-muted-foreground">Blockchain Proof</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-orange-500">85%</div>
                <p className="text-sm text-muted-foreground">Avg Score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight">
                    The Compliance Challenge
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Traditional compliance verification takes weeks or months, relies on manual processes, 
                    and lacks independent verification capabilities.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Manual documentation and control mapping",
                    "Weeks to months for verification cycles", 
                    "No independent auditor verification",
                    "Proprietary formats instead of standards",
                    "No immutable compliance evidence"
                  ].map((problem) => (
                    <div key={problem} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight">
                    The CompliLedger Solution
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    AI-powered analysis with blockchain verification, NIST OSCAL standards, 
                    and independent auditor access.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "AI-automated security analysis and control mapping",
                    "Minutes for complete verification cycles",
                    "Independent auditor portal with blockchain proof",
                    "Official NIST OSCAL standardized documentation",
                    "Immutable compliance evidence on Algorand"
                  ].map((solution) => (
                    <div key={solution} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on OSCAL standards with blockchain verification and AI-enhanced analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileCheck,
                  title: "OSCAL Integration",
                  description: "Official NIST OSCAL compliance with automated Component Definition, Assessment Plan, Results, and POA&M generation.",
                  color: "text-blue-500"
                },
                {
                  icon: Shield,
                  title: "Blockchain Anchored",
                  description: "Immutable verification evidence anchored on Algorand blockchain with IPFS document storage for tamper-proof compliance records.",
                  color: "text-green-500"
                },
                {
                  icon: Users,
                  title: "Dual Portal Architecture", 
                  description: "Separate company and auditor interfaces enabling independent verification while protecting sensitive intellectual property.",
                  color: "text-purple-500"
                },
                {
                  icon: Zap,
                  title: "AI-Enhanced Speed",
                  description: "Minutes instead of weeks for compliance verification with automated control mapping and intelligent remediation suggestions.",
                  color: "text-yellow-500"
                },
                {
                  icon: Lock,
                  title: "Trust Through Verification",
                  description: "Blockchain proof eliminates 'trust us' problem with independent auditor verification and immutable compliance evidence.",
                  color: "text-red-500"
                },
                {
                  icon: Globe,
                  title: "Standards-First Approach",
                  description: "Official OSCAL compliance, NIST alignment from day one, and direct integration with existing GRC tools.",
                  color: "text-cyan-500"
                }
              ].map((feature) => (
                <Card key={feature.title} className="cosmic-glass hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Streamlined Compliance Flows
              </h2>
              <p className="text-xl text-muted-foreground">
                Two optimized workflows for companies and auditors
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Company Flow */}
              <Card className="cosmic-glass overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileCheck className="h-6 w-6" />
                    Company Flow
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    {[
                      { step: 1, text: "Upload SBOM/Smart Contract", time: "30s" },
                      { step: 2, text: "Select Compliance Standard", time: "15s" },
                      { step: 3, text: "AI Analysis & Control Mapping", time: "90s" },
                      { step: 4, text: "Blockchain Verification", time: "10s" },
                      { step: 5, text: "Download OSCAL Reports", time: "5s" }
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">
                          {item.step}
                        </div>
                        <span className="flex-1">{item.text}</span>
                        <Badge variant="secondary" className="text-xs">
                          {item.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/company">Start Company Portal</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Auditor Flow */}
              <Card className="cosmic-glass overflow-hidden">
                <CardHeader className="bg-secondary/50">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Users className="h-6 w-6" />
                    Auditor Flow
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    {[
                      { step: 1, text: "Search Controls/Artifacts", time: "10s" },
                      { step: 2, text: "View Compliance Claims", time: "15s" },
                      { step: 3, text: "Verify on Blockchain", time: "5s" },
                      { step: 4, text: "Download OSCAL Documents", time: "10s" },
                      { step: 5, text: "Export Audit Trail", time: "5s" }
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm flex items-center justify-center font-semibold">
                          {item.step}
                        </div>
                        <span className="flex-1">{item.text}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/auditor">Access Auditor Portal</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Battle-Tested Architecture
              </h2>
              <p className="text-xl text-muted-foreground">
                Enterprise-grade infrastructure built for scale and security
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "NIST OSCAL",
                  description: "Standards-compliant documentation and control mapping",
                  icon: Shield,
                  tech: "Official Schema Validation"
                },
                {
                  name: "Algorand Blockchain", 
                  description: "Immutable verification proof with low fees and fast finality",
                  icon: ExternalLink,
                  tech: "Testnet Integration"
                },
                {
                  name: "IPFS Storage",
                  description: "Decentralized document storage with content addressing",
                  icon: FileCheck,
                  tech: "Content Integrity"
                },
                {
                  name: "AI Analysis Engine",
                  description: "Automated security analysis and compliance verification",
                  icon: Zap,
                  tech: "Smart Contract & SBOM"
                }
              ].map((tech) => (
                <Card key={tech.name} className="cosmic-glass text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <tech.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {tech.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {tech.tech}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Ready to Transform Your Compliance?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the future of compliance verification with AI-powered analysis, 
                blockchain proof, and NIST-standardized reporting.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-10 py-6 h-auto">
                <Link to="/company">
                  Start Free Verification
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 h-auto">
                <Link to="/auditor">
                  Auditor Access
                  <ExternalLink className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">CompliLedger</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered compliance verification with blockchain anchoring and OSCAL standards.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Platform</h4>
              <div className="space-y-2">
                <Link to="/company" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Company Portal
                </Link>
                <Link to="/auditor" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Auditor Portal
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Standards</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>NIST 800-53</div>
                <div>OSCAL Framework</div>
                <div>ISO 27001</div>
                <div>SOC 2 Type II</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Technology</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Algorand Blockchain</div>
                <div>IPFS Storage</div>
                <div>AI Analysis</div>
                <div>Smart Contracts</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 CompliLedger. AI-Powered Compliance Verification Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
