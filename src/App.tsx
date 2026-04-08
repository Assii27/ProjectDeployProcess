import { motion } from "motion/react";
import { 
  Server, 
  Settings, 
  Code2, 
  Package, 
  Terminal, 
  CheckCircle2, 
  Info, 
  ExternalLink,
  Download,
  Globe,
  Cpu
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import DeploymentFlow from "@/src/components/DeploymentFlow";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white border-b border-slate-200 pt-16 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border-blue-100">
              Deployment Guide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              How to Deploy <span className="text-green-600">Spring Boot</span> in External Server
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A comprehensive, step-by-step interactive guide to converting your JAR-based Spring Boot application into a WAR file for production deployment on Apache Tomcat.
            </p>
          </motion.div>

          {/* Animated Flow Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <DeploymentFlow />
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation (Sticky) */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-8 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Navigation</h3>
              <nav className="space-y-1">
                {[
                  { id: "basics", label: "Understand Basics", icon: Info },
                  { id: "setup", label: "Tomcat Setup", icon: Server },
                  { id: "convert", label: "JAR to WAR", icon: Code2 },
                  { id: "build", label: "Build & Deploy", icon: Package },
                  { id: "access", label: "Access App", icon: ExternalLink },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </nav>
              
              <Card className="mt-8 bg-blue-600 text-white border-none shadow-xl shadow-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Pro Tip</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-100">
                  Always use <code className="bg-blue-700 px-1 rounded">provided</code> scope for Tomcat dependency to avoid conflicts with the external server.
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* Section 1: Basics */}
            <section id="basics" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">1. Understand Basics</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-slate-200 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 border-none">JAR</Badge>
                      <Cpu className="w-5 h-5 text-slate-400" />
                    </div>
                    <CardTitle>Java Archive</CardTitle>
                    <CardDescription>The default Spring Boot format</CardDescription>
                  </CardHeader>
                  <CardContent className="text-slate-600">
                    Used for applications with an <strong>embedded server</strong>. You run it directly using <code className="text-xs bg-slate-100 p-1 rounded">java -jar app.jar</code>.
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:border-amber-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none">WAR</Badge>
                      <Globe className="w-5 h-5 text-amber-400" />
                    </div>
                    <CardTitle>Web Archive</CardTitle>
                    <CardDescription>Required for external servers</CardDescription>
                  </CardHeader>
                  <CardContent className="text-slate-600">
                    Used when you want to deploy your application into an <strong>external container</strong> like Apache Tomcat, JBoss, or WildFly.
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Section 2: Tomcat Setup */}
            <section id="setup" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Server className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">2. Setup External Tomcat</h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-xl px-4 bg-white shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">2.1</div>
                      <div>
                        <p className="font-bold">Download & Install</p>
                        <p className="text-sm text-slate-500 font-normal">Get the latest Apache Tomcat distribution</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-slate-600">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                      <Download className="w-5 h-5 text-slate-400 mt-1" />
                      <div>
                        <p className="mb-2">Download the Core distribution (zip/tar.gz) from the official website.</p>
                        <a href="https://tomcat.apache.org/" target="_blank" className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                          Official Tomcat Downloads <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-xl px-4 bg-white shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">2.2</div>
                      <div>
                        <p className="font-bold">Configure Port (Optional)</p>
                        <p className="text-sm text-slate-500 font-normal">Change default 8080 to a custom port</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4">
                      <p className="text-slate-600">Open <code className="bg-slate-100 px-1 rounded">conf/server.xml</code> and find the Connector element:</p>
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-blue-300 overflow-x-auto">
                        <pre>{`<Connector port="9090" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" />`}</pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-xl px-4 bg-white shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">2.3</div>
                      <div>
                        <p className="font-bold">Manager Access</p>
                        <p className="text-sm text-slate-500 font-normal">Configure users for the web interface</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4">
                      <p className="text-slate-600">Edit <code className="bg-slate-100 px-1 rounded">conf/tomcat-users.xml</code> and add:</p>
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-300 overflow-x-auto">
                        <pre>{`<user username="root" password="root" 
      roles="manager-gui,admin-gui"/>`}</pre>
                      </div>
                      <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg text-sm border border-amber-100">
                        <Info className="w-4 h-4" />
                        <span>Note: Use strong passwords in production environments!</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-xl px-4 bg-white shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">2.4</div>
                      <div>
                        <p className="font-bold">Start Server</p>
                        <p className="text-sm text-slate-500 font-normal">Launch Tomcat and verify installation</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Windows</p>
                        <code className="text-sm bg-white p-2 rounded border block">bin/startup.bat</code>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Linux/Mac</p>
                        <code className="text-sm bg-white p-2 rounded border block">sh bin/startup.sh</code>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-600">Access at: <a href="http://localhost:8080" className="text-blue-600 hover:underline">http://localhost:8080</a></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <Separator className="bg-slate-200" />

            {/* Section 3: JAR to WAR */}
            <section id="convert" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">3. Convert JAR → WAR</h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600">Step 3.1</Badge>
                    <h3 className="text-xl font-bold">Update pom.xml</h3>
                  </div>
                  <p className="text-slate-600">Change the packaging type from default (jar) to war.</p>
                  <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-lg">
                    <pre className="text-blue-400">{`<packaging>war</packaging>`}</pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600">Step 3.2</Badge>
                    <h3 className="text-xl font-bold">Configure Tomcat Dependency</h3>
                  </div>
                  <p className="text-slate-600">Mark the embedded Tomcat as <code className="bg-slate-100 px-1 rounded">provided</code> so it's not included in the WAR.</p>
                  <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-lg">
                    <pre>{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>`}</pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600">Step 4</Badge>
                    <h3 className="text-xl font-bold">Modify Main Class</h3>
                  </div>
                  <p className="text-slate-600">Extend <code className="bg-slate-100 px-1 rounded">SpringBootServletInitializer</code> and override the <code className="bg-slate-100 px-1 rounded">configure</code> method.</p>
                  <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-lg overflow-x-auto">
                    <pre className="text-green-400">{`@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}</pre>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Section 4: Build & Deploy */}
            <section id="build" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">4. Build & Deploy</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-slate-400" />
                    Build the WAR
                  </h3>
                  <p className="text-slate-600">Run the Maven package command in your project root.</p>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-white flex items-center justify-between">
                    <code>mvn clean package</code>
                    <div className="text-slate-500">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 italic">
                    Artifact will be generated in: <code className="text-blue-600 font-bold">target/project-name.war</code>
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Settings className="w-5 h-5 text-slate-400" />
                    Deployment Methods
                  </h3>
                  <Tabs defaultValue="manual" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="manual">Manual</TabsTrigger>
                      <TabsTrigger value="manager">Manager UI</TabsTrigger>
                    </TabsList>
                    <TabsContent value="manual" className="p-4 bg-white border rounded-lg mt-2 space-y-3">
                      <p className="text-sm text-slate-600">1. Copy WAR file to <code className="text-xs bg-slate-100 p-1">webapps/</code></p>
                      <p className="text-sm text-slate-600">2. Start Tomcat server</p>
                      <p className="text-sm text-slate-600">3. Tomcat auto-extracts and deploys</p>
                    </TabsContent>
                    <TabsContent value="manager" className="p-4 bg-white border rounded-lg mt-2 space-y-3">
                      <p className="text-sm text-slate-600">1. Go to <code className="text-xs bg-slate-100 p-1">/manager/html</code></p>
                      <p className="text-sm text-slate-600">2. Login with configured user</p>
                      <p className="text-sm text-slate-600">3. Upload WAR via "WAR file to deploy"</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-200" />

            {/* Final Section: Access */}
            <section id="access" className="scroll-mt-8 bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-3xl rounded-full -ml-32 -mb-32" />
              
              <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Success! Access Your App</h2>
                <p className="text-slate-400 text-lg">
                  Once deployed, your application will be available at the following URL structure:
                </p>
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-mono text-xl text-blue-400">
                  http://localhost:8080/project-name/
                </div>
                <div className="pt-8 flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="text-slate-400 border-slate-700 px-4 py-2">WAR Packaging</Badge>
                  <Badge variant="outline" className="text-slate-400 border-slate-700 px-4 py-2">Provided Tomcat</Badge>
                  <Badge variant="outline" className="text-slate-400 border-slate-700 px-4 py-2">Servlet Initializer</Badge>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">SpringDeploy<span className="text-blue-600">.io</span></span>
          </div>
          <p className="text-slate-500 text-sm">
            Interactive Deployment Guide &copy; 2026. Built with React, Tailwind, and Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

