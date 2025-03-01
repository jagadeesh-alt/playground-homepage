import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { 
    name: "Jane Doe", 
    feedback: "This playground changed the way I code! Amazing features and collaboration tools.", 
    avatar: "https://i.pravatar.cc/100?img=1" 
  },
  { 
    name: "John Smith", 
    feedback: "AI-assisted debugging is a game-changer. Highly recommend!", 
    avatar: "https://i.pravatar.cc/100?img=2" 
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          What Our Users Say
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <FaQuoteLeft className="text-blue-400 text-4xl mb-3" />
              <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
              <div className="mt-4 flex items-center justify-center space-x-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-blue-400" />
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
