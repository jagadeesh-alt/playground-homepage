import { FaUsers, FaRobot, FaCode, FaCloud } from "react-icons/fa";

const features = [
  { title: "Real-time Collaboration", description: "Work with your team in real-time with live coding.", icon: <FaUsers className="text-blue-400 text-3xl" /> },
  { title: "AI Assistance", description: "Get AI-powered code suggestions and debugging help.", icon: <FaRobot className="text-purple-400 text-3xl" /> },
  { title: "Multi-Language Support", description: "Write code in multiple languages with seamless execution.", icon: <FaCode className="text-green-400 text-3xl" /> },
  { title: "Cloud Deployment", description: "Deploy projects with one click to AWS, Azure, or Google Cloud.", icon: <FaCloud className="text-yellow-400 text-3xl" /> },
];

export default function Features() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Why Choose Darion Playground?
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                {feature.icon}
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-3 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
