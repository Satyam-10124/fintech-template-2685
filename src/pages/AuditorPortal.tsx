import React, { useState } from 'react';
import { Search, Shield, ExternalLink, Download, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const AuditorPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { toast } = useToast();

  // Mock verification data
  const mockVerifications = [
    {
      id: '1',
      controlId: 'AC-3',
      artifactHash: 'sha256:abc123...',
      complianceScore: 85,
      status: 'verified',
      timestamp: '2025-08-13T10:30:00Z',
      blockchainTx: 'ALG_TX_456789',
      oscalCid: 'QmX1Y2Z3...',
      profile: 'NIST 800-53 Moderate'
    },
    {
      id: '2',
      controlId: 'SC-7',
      artifactHash: 'sha256:def456...',
      complianceScore: 92,
      status: 'verified',
      timestamp: '2025-08-13T09:15:00Z',
      blockchainTx: 'ALG_TX_789123',
      oscalCid: 'QmA4B5C6...',
      profile: 'NIST 800-53 High'
    },
    {
      id: '3',
      controlId: 'SI-4',
      artifactHash: 'sha256:ghi789...',
      complianceScore: 67,
      status: 'failed',
      timestamp: '2025-08-12T16:45:00Z',
      blockchainTx: 'ALG_TX_321654',
      oscalCid: 'QmD7E8F9...',
      profile: 'NIST 800-53 Moderate'
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a control ID or artifact hash",
        variant: "destructive",
      });
      return;
    }

    // Mock search results
    const filtered = mockVerifications.filter(
      v => v.controlId.toLowerCase().includes(searchQuery.toLowerCase()) ||
           v.artifactHash.includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filtered);
    
    toast({
      title: "Search completed",
      description: `Found ${filtered.length} verification record(s)`,
    });
  };

  const verifyOnBlockchain = (txId: string) => {
    toast({
      title: "Opening blockchain verification",
      description: `Redirecting to Algorand Explorer for transaction ${txId}`,
    });
    // In real app, would open blockchain explorer
  };

  const downloadOSCAL = (cid: string) => {
    toast({
      title: "Downloading OSCAL documents",
      description: `Retrieving documents from IPFS: ${cid}`,
    });
  };

  const exportAuditTrail = (id: string) => {
    toast({
      title: "Exporting audit trail",
      description: "Generating comprehensive audit history report",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 cosmic-grid">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground">
            CompliLedger Auditor Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Independent verification of compliance claims with blockchain proof and OSCAL document access
          </p>
        </div>

        {/* Search Section */}
        <Card className="cosmic-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Verification Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Search by Control ID (e.g., AC-3) or Artifact Hash"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Tabs defaultValue="results" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="results">Verification Results</TabsTrigger>
            <TabsTrigger value="controls">Control Library</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="results" className="space-y-4">
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((result) => (
                  <Card key={result.id} className="cosmic-glass">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="font-mono">
                              {result.controlId}
                            </Badge>
                            <Badge 
                              variant={result.status === 'verified' ? 'default' : 'destructive'}
                              className="flex items-center gap-1"
                            >
                              {result.status === 'verified' ? (
                                <CheckCircle className="h-3 w-3" />
                              ) : (
                                <XCircle className="h-3 w-3" />
                              )}
                              {result.status}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg">{result.profile}</h3>
                          <p className="text-sm text-muted-foreground">
                            Compliance Score: <span className="font-semibold">{result.complianceScore}%</span>
                          </p>
                        </div>
                        <div className="text-right space-y-2">
                          <p className="text-sm text-muted-foreground">
                            {new Date(result.timestamp).toLocaleDateString()}
                          </p>
                          <p className="text-xs font-mono text-muted-foreground">
                            {result.artifactHash}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <Button 
                          variant="outline" 
                          onClick={() => verifyOnBlockchain(result.blockchainTx)}
                          className="flex items-center gap-2"
                        >
                          <Shield className="h-4 w-4" />
                          Verify on Blockchain
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                        
                        <Button 
                          variant="outline"
                          onClick={() => downloadOSCAL(result.oscalCid)}
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download OSCAL
                        </Button>
                        
                        <Button 
                          variant="outline"
                          onClick={() => exportAuditTrail(result.id)}
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Export Audit Trail
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : searchQuery && searchResults.length === 0 ? (
              <Card className="cosmic-glass">
                <CardContent className="text-center py-12">
                  <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    No verification records match your search criteria
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="cosmic-glass">
                <CardContent className="text-center py-12">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Independent Verification</h3>
                  <p className="text-muted-foreground">
                    Search for control IDs or artifact hashes to verify compliance claims
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="controls" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'AC-3', name: 'Access Enforcement', category: 'Access Control' },
                { id: 'SC-7', name: 'Boundary Protection', category: 'System Communications' },
                { id: 'SI-4', name: 'System Monitoring', category: 'System Information Integrity' },
                { id: 'AU-2', name: 'Event Logging', category: 'Audit and Accountability' },
                { id: 'IA-2', name: 'Identification and Authentication', category: 'Identification' },
                { id: 'CM-2', name: 'Baseline Configuration', category: 'Configuration Management' }
              ].map((control) => (
                <Card key={control.id} className="cosmic-glass">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 font-mono">
                      {control.id}
                    </Badge>
                    <h4 className="font-semibold mb-1">{control.name}</h4>
                    <p className="text-sm text-muted-foreground">{control.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="cosmic-glass">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-500">156</div>
                  <p className="text-sm text-muted-foreground">Total Verifications</p>
                </CardContent>
              </Card>
              
              <Card className="cosmic-glass">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-500">89%</div>
                  <p className="text-sm text-muted-foreground">Avg Compliance Score</p>
                </CardContent>
              </Card>
              
              <Card className="cosmic-glass">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-500">23</div>
                  <p className="text-sm text-muted-foreground">Active Controls</p>
                </CardContent>
              </Card>
              
              <Card className="cosmic-glass">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-orange-500">12</div>
                  <p className="text-sm text-muted-foreground">Failed Audits</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuditorPortal;