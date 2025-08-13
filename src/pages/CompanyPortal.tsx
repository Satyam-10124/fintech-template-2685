import React, { useState } from 'react';
import { Upload, Shield, FileCheck, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const CompanyPortal = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [complianceStandard, setComplianceStandard] = useState('');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [complianceScore, setComplianceScore] = useState<number | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verified' | 'failed' | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for analysis`,
      });
    }
  };

  const startAnalysis = () => {
    if (!uploadedFile || !complianceStandard) {
      toast({
        title: "Missing requirements",
        description: "Please upload a file and select a compliance standard",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setComplianceScore(85);
          setVerificationStatus('verified');
          toast({
            title: "Analysis complete",
            description: "Your artifact has been verified and anchored on blockchain",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const downloadOSCALReports = () => {
    toast({
      title: "Downloading OSCAL Reports",
      description: "All 4 OSCAL documents are being prepared for download",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 cosmic-grid">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground">
            CompliLedger Company Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered compliance verification with blockchain anchoring and OSCAL-standardized reporting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="cosmic-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Artifact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept=".json,.sol,.js,.ts,.py"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Drop your SBOM or Smart Contract here, or click to browse
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Supports: JSON, Solidity, JavaScript, TypeScript, Python
                  </span>
                </label>
              </div>
              
              {uploadedFile && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <FileCheck className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{uploadedFile.name}</span>
                  <Badge variant="secondary">{Math.round(uploadedFile.size / 1024)} KB</Badge>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Compliance Standard</label>
                <Select value={complianceStandard} onValueChange={setComplianceStandard}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select compliance framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nist-800-53">NIST 800-53 (Moderate Baseline)</SelectItem>
                    <SelectItem value="nist-800-53-high">NIST 800-53 (High Baseline)</SelectItem>
                    <SelectItem value="iso-27001">ISO 27001</SelectItem>
                    <SelectItem value="soc2">SOC 2 Type II</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={startAnalysis} 
                disabled={!uploadedFile || !complianceStandard || isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? 'Analyzing...' : 'Start AI Analysis'}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="cosmic-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Verification Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {isAnalyzing && (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Analysis Progress</span>
                    <span>{analysisProgress}%</span>
                  </div>
                  <Progress value={analysisProgress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    AI is analyzing your artifact against {complianceStandard} controls...
                  </p>
                </div>
              )}

              {complianceScore !== null && (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-green-500">{complianceScore}%</div>
                    <p className="text-sm text-muted-foreground">Compliance Score</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-semibold text-green-500">23</div>
                      <p className="text-xs text-muted-foreground">Controls Passed</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-semibold text-red-500">4</div>
                      <p className="text-xs text-muted-foreground">Controls Failed</p>
                    </div>
                  </div>

                  {verificationStatus && (
                    <div className="flex items-center justify-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Verified on Algorand Testnet</span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {complianceScore !== null && (
                <div className="space-y-3">
                  <Button onClick={downloadOSCALReports} className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download OSCAL Reports
                  </Button>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <span>• Component Definition</span>
                    <span>• Assessment Plan</span>
                    <span>• Assessment Results</span>
                    <span>• POA&M</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="cosmic-glass text-center">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Advanced security analysis with automated control mapping
              </p>
            </CardContent>
          </Card>
          
          <Card className="cosmic-glass text-center">
            <CardContent className="pt-6">
              <FileCheck className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">OSCAL Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Official NIST schema validation and standardized reporting
              </p>
            </CardContent>
          </Card>
          
          <Card className="cosmic-glass text-center">
            <CardContent className="pt-6">
              <ExternalLink className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Blockchain Verified</h3>
              <p className="text-sm text-muted-foreground">
                Immutable proof anchored on Algorand blockchain
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompanyPortal;