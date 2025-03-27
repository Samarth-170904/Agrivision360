
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  { id: 1, name: "Amit Raj Thakur", imagePlaceholder: "AT" },
  { id: 2, name: "Samarth Mule", imagePlaceholder: "SM" },
  { id: 3, name: "Sahil Malekar", imagePlaceholder: "SM" },
  { id: 4, name: "Sitaram Patel", imagePlaceholder: "SP" }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6"> 
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AgriVision 360</h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            AgriVision 360 is a sophisticated platform that bridges technology and agriculture, 
            enabling farmers to optimize resources and increase productivity.
          </p>
        </div>

        {/* Our Mission */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-8">
            Our mission is to transform agriculture through innovative technology solutions that enhance 
            farm productivity, sustainability, and profitability. By providing farmers with cutting-edge 
            tools and data-driven insights, we aim to revolutionize farming practices and contribute to 
            a more efficient and sustainable agricultural ecosystem.
          </p>

          {/* Our Vision */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg mb-16">
            We envision a future where every farmer, regardless of scale, has access to advanced 
            technological tools that optimize their farming operations. Through our platform, we strive 
            to bridge the gap between traditional farming methods and modern technological advancements, 
            creating a harmonious integration that benefits both farmers and the environment.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="aspect-square relative bg-muted flex items-center justify-center">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={`/team-member-${member.id}.jpg`} alt={member.name} />
                    <AvatarFallback className="text-4xl">{member.imagePlaceholder}</AvatarFallback>
                  </Avatar>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentor Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Under the Guidance of</h2>
          <Card className="max-w-xs mx-auto overflow-hidden">
            <div className="aspect-square relative bg-muted flex items-center justify-center">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src="/mentor.jpg" alt="Srinivas Ambala" />
                <AvatarFallback className="text-4xl">SA</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-bold text-lg">Srinivas Ambala</h3>
              <p className="text-muted-foreground">Mentor & Advisor</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
