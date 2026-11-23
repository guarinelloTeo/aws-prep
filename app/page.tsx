"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { roadmapData, awsSpecificResources, type RoadmapLevel } from "@/lib/roadmap-data";
import { 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Sparkles, 
  Zap, 
  Bot,
  CheckCircle2,
  BookOpen,
  Award,
  Target,
  Rocket
} from "lucide-react";

export default function Home() {
  const [completedLevels, setCompletedLevels] = useState<Set<string>>(new Set());
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const toggleLevel = (levelId: string) => {
    const newCompleted = new Set(completedLevels);
    if (newCompleted.has(levelId)) {
      newCompleted.delete(levelId);
    } else {
      newCompleted.add(levelId);
    }
    setCompletedLevels(newCompleted);
  };

  const progress = (completedLevels.size / roadmapData.length) * 100;

  const getIconForLevel = (level: number) => {
    const icons = [
      BookOpen, Code, Database, Cloud, Database, 
      Brain, Sparkles, Brain, Sparkles, 
      Brain, Bot, Zap, Bot, Rocket
    ];
    const Icon = icons[level - 1] || Target;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#1c1915]">
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="mb-8">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#c2410c] mb-3">Study guide · 2026</p>
          <h1 className="text-5xl sm:text-6xl font-serif tracking-tight leading-[0.95] text-[#1c1915]">
            AI Engineer Roadmap
          </h1>
          <p className="mt-4 text-lg text-[#615b53] max-w-xl">
            Concepts for interviews and daily AWS work. AI can write the code. You still choose the architecture.
          </p>
          <div className="mt-6 bg-white/80 border border-[#e6ddd0] rounded-2xl p-4 max-w-xl">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="font-semibold">Your progress</span>
              <span className="text-[#615b53]">{completedLevels.size} / {roadmapData.length} levels</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <Tabs defaultValue="roadmap" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 border border-[#e6ddd0] rounded-full h-12">
            <TabsTrigger value="roadmap" className="rounded-full data-[state=active]:bg-[#1c1915] data-[state=active]:text-white">
              <Target className="h-4 w-4 mr-2" />
              Learning Roadmap
            </TabsTrigger>
            <TabsTrigger value="aws" className="rounded-full data-[state=active]:bg-[#1c1915] data-[state=active]:text-white">
              <Cloud className="h-4 w-4 mr-2" />
              AWS Engineer Focus
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="space-y-6">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="space-y-4 pr-4">
                {roadmapData.map((level) => (
                  <Card 
                    key={level.id} 
                    className={`bg-white/90 shadow-sm border transition-all rounded-3xl ${
                      completedLevels.has(level.id) 
                        ? 'border-green-600' 
                        : 'border-[#e6ddd0]'
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            completedLevels.has(level.id) 
                              ? 'bg-green-600' 
                              : level.color
                          }`}>
                            {getIconForLevel(level.level)}
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-[#1c1915] font-serif tracking-tight flex items-center gap-2">
                              Level {level.level}: {level.title}
                              {completedLevels.has(level.id) && (
                                <CheckCircle2 className="h-6 w-6 text-green-400" />
                              )}
                            </CardTitle>
                            <CardDescription className="text-[#615b53] text-base">
                              {level.description}
                            </CardDescription>
                            {level.awsRelevance && (
                              <Badge variant="secondary" className="mt-2 bg-orange-600 text-white">
                                <Award className="h-3 w-3 mr-1" />
                                {level.awsRelevance}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => toggleLevel(level.id)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            completedLevels.has(level.id)
                              ? 'bg-[#166534] hover:bg-[#14532d] text-white'
                              : 'bg-[#1c1915] hover:bg-black text-white'
                          }`}
                        >
                          {completedLevels.has(level.id) ? 'Completed' : 'Mark Complete'}
                        </button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion className="w-full">
                        {level.topics.map((topic, idx) => (
                          <AccordionItem key={idx} value={`topic-${idx}`} className="border-[#e6ddd0]">
                            <AccordionTrigger className="text-[#1c1915] hover:text-[#c2410c]">
                              <span className="text-lg font-semibold">{topic.title}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-6 pl-4">
                                {/* Key Concepts */}
                                <div>
                                  <h4 className="font-semibold text-[#615b53] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    Key Concepts to Understand
                                  </h4>
                                  <ul className="space-y-2">
                                    {topic.concepts.map((concept, i) => (
                                      <li key={i} className="text-[#2c2824] flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">▪</span>
                                        <span>{concept}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Interview Questions */}
                                <div>
                                  <h4 className="font-semibold text-[#92400e] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                                    <Target className="h-4 w-4" />
                                    Common Interview Questions
                                  </h4>
                                  <ul className="space-y-2">
                                    {topic.interviewQuestions.map((question, i) => (
                                      <li key={i} className="text-[#2c2824] flex items-start gap-2">
                                        <span className="text-orange-400 mt-1">❓</span>
                                        <span className="italic">{question}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Practical Tips */}
                                <div>
                                  <h4 className="font-semibold text-[#166534] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                                    <Zap className="h-4 w-4" />
                                    Practical Tips for Daily Work
                                  </h4>
                                  <ul className="space-y-2">
                                    {topic.practicalTips.map((tip, i) => (
                                      <li key={i} className="text-[#2c2824] flex items-start gap-2">
                                        <span className="text-green-400 mt-1">💡</span>
                                        <span>{tip}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* AWS Connections */}
                                {topic.awsConnections && topic.awsConnections.length > 0 && (
                                  <div className="bg-[#fff1e8] border border-[#f0d2c2] rounded-2xl p-4">
                                    <h4 className="font-semibold text-[#c2410c] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                                      <Cloud className="h-4 w-4" />
                                      AWS Services for This Topic
                                    </h4>
                                    <ul className="space-y-2">
                                      {topic.awsConnections.map((connection, i) => (
                                        <li key={i} className="text-[#7c2d12] flex items-start gap-2">
                                          <span className="text-orange-400 mt-1">☁️</span>
                                          <span>{connection}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="aws">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="space-y-6 pr-4">
                <Card className="bg-white/90 border border-[#e6ddd0] rounded-3xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl text-[#1c1915] font-serif tracking-tight flex items-center gap-3">
                      <Cloud className="h-8 w-8 text-[#c2410c]" />
                      {awsSpecificResources.title}
                    </CardTitle>
                    <CardDescription className="text-[#615b53] text-lg">
                      {awsSpecificResources.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                {awsSpecificResources.categories.map((category, idx) => (
                  <Card key={idx} className="bg-white/90 border border-[#e6ddd0] rounded-3xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#1c1915] font-serif tracking-tight">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {category.services && category.services.map((service, sIdx) => (
                        <div key={sIdx} className="bg-[#fffaf5] p-5 rounded-2xl border border-[#e6ddd0]">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-serif text-[#1c1915]">{service.name}</h3>
                              <p className="text-[#615b53]">{service.purpose}</p>
                            </div>
                            {service.whenToUse && (
                              <Badge variant="secondary" className="bg-green-700 text-white">
                                Use Case
                              </Badge>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-[#615b53] uppercase tracking-wider text-xs mb-2">Key Features</h4>
                              <ul className="space-y-1">
                                {service.keyFeatures.map((feature, fIdx) => (
                                  <li key={fIdx} className="text-[#2c2824] flex items-start gap-2">
                                    <span className="text-blue-400">▪</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {service.whenToUse && (
                              <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                                <span className="font-semibold text-[#166534]">When to use: </span>
                                <span>{service.whenToUse}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {category.topics && category.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="bg-[#fffaf5] p-5 rounded-2xl border border-[#e6ddd0]">
                          <h3 className="text-xl font-serif text-[#1c1915] mb-4">{topic.category}</h3>
                          <ul className="space-y-3">
                            {topic.questions.map((question, qIdx) => (
                              <li key={qIdx} className="text-[#2c2824] flex items-start gap-2">
                                <span className="text-orange-400 mt-1">❓</span>
                                <span className="italic">{question}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}

                {/* Additional AWS Tips */}
                <Card className="bg-white/90 border border-[#e6ddd0] rounded-3xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#1c1915] font-serif tracking-tight flex items-center gap-2">
                      <Award className="h-6 w-6 text-yellow-400" />
                      Tips for AWS AI/ML Engineer Interviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-[#2c2824]">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#1c1915]">Before the Interview</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Get AWS Certified Solutions Architect Associate (minimum)</li>
                        <li>• Consider AWS Machine Learning Specialty certification</li>
                        <li>• Build 2-3 projects deployed on AWS with detailed documentation</li>
                        <li>• Know the AWS Free Tier limits and cost optimization strategies</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#1c1915]">During Technical Interviews</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Always mention cost implications of your design choices</li>
                        <li>• Discuss trade-offs between services (e.g., EC2 vs Lambda vs Fargate)</li>
                        <li>• Show awareness of security best practices (IAM, VPC, encryption)</li>
                        <li>• Mention monitoring and observability (CloudWatch, X-Ray)</li>
                        <li>• Understand the Well-Architected Framework pillars</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#1c1915]">Common AWS ML Architecture Questions</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Design a real-time recommendation system on AWS</li>
                        <li>• Build a document processing pipeline with ML</li>
                        <li>• Create a chatbot with RAG using Bedrock and OpenSearch</li>
                        <li>• Architect a CV system processing live video streams</li>
                        <li>• Design a multi-region, highly available ML inference API</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-8 text-[#615b53] text-sm">
          <p>💡 Pro Tip: Focus on understanding concepts deeply. AI can write the code, but you need to architect solutions and solve problems.</p>
          <p className="mt-2">🎯 For AWS roles: Hands-on experience &gt; Certifications &gt; Theoretical knowledge</p>
        </div>
      </div>
    </div>
  );
}
