// "use client"

// import { useState } from "react"
// import { Mail, Linkedin, Github } from "lucide-react"
// import { motion } from "framer-motion"

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     setFormData({ name: "", email: "", message: "" })
//   }

//   return (
//     <section id="contact" className="py-20  text-white bg-gray-200">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-black">Contact Me</h2>
        
//         <motion.div 
//           className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
//           initial={{ opacity: 0, y: 50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {["name", "email", "message"].map((field, index) => (
//               <motion.div 
//                 key={field}
//                 initial={{ opacity: 0, y: 30 }} 
//                 animate={{ opacity: 1, y: 0 }} 
//                 transition={{ duration: 0.4, delay: index * 0.2 }}
//               >
//                 <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
//                   {field}
//                 </label>
//                 {field === "message" ? (
//                   <textarea
//                     id={field}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
//                   />
//                 ) : (
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     id={field}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
//                   />
//                 )}
//               </motion.div>
//             ))}

// <motion.button
//   type="submit"
//   className="w-auto px-3 py-2 text-sm bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300 transform hover:scale-105"
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
// >
//   Send Message
// </motion.button>

//           </form>

//           <motion.div 
//             className="mt-8 flex justify-center space-x-6"
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             {[ 
//               { icon: <Mail className="w-8 h-8" />, href: "mailto:vasu.dubbanaboina@example.com" },
//               { icon: <Linkedin className="w-8 h-8" />, href: "https://linkedin.com/in/vasu-dubbanaboina" },
//               { icon: <Github className="w-8 h-8" />, href: "https://github.com/vasu-22" }
//             ].map((item, index) => (
//               <motion.a 
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-gray-300 transition transform hover:scale-110"
//                 whileHover={{ scale: 1.2 }}
//               >
//                 {item.icon}
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Contact
