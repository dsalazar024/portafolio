import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  // return (
  //   <Container id="project">
  //     <h2>Mis Proyectos</h2>
  //     <div className="projects">

  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
  //               <title>Folder</title>
  //               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  //             </svg>
  //             <div className="project-links">
  //               <a href="https://github.com/CodeVinayak/MultilingualVQA" target="_blank" rel="noreferrer">
  //                 <img src={githubIcon} alt="GitHub" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>Modelo Visión-Lenguaje VQA Multilingüe</h3>
  //             <p>
  //               Fine-tuning de Qwen2.5-VL para respuesta visual a preguntas en 14 idiomas con preprocesamiento optimizado.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Python</li>
  //               <li>Qwen2.5-VL</li>
  //               <li>Unsloth</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation>

  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
  //             <div className="project-links">
  //               <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
  //                 <img src={githubIcon} alt="Visit site" /></a>
  //               {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>  */}
  //               </div>
  //           </header>
  //           <div className="body">
  //             <h3>Aplicación de Votación Serverless para Lenguajes de Programación</h3>
  //             <p>Desarrollé una app de votación serverless con React, AWS Lambda, API Gateway y DynamoDB, permitiendo a los usuarios ver lenguajes de programación, votar y acceder a detalles mediante una UI interactiva, aprovechando la arquitectura serverless para escalabilidad y eficiencia de costos.</p>
  //           </div>
  //           <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer>
  //         </div>
  //       </ScrollAnimation>

  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
  //             <div className="project-links">
  //               <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
  //                 <img src={githubIcon} alt="Visit site" /> </a>
  //               <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" /></a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>GeniusBot: Asistente con IA e Interpretación de PDFs</h3>
  //             <p>
  //               Desarrollé una aplicación de chatbot interactivo con Streamlit, el modelo GPT-3.5-turbo de OpenAI y PyPDF2 para extracción de texto en PDFs, permitiendo a los usuarios hacer preguntas contextuales sobre PDFs cargados y consultas generales.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Streamlit</li>
  //               <li>PyPDF2</li>
  //               <li>LangChain</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation>


  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
  //                 <img src={githubIcon} alt="Visit site" />
  //               </a>
  //               <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>MediBook: Agenda de Citas Médicas con Historial Clínico</h3>
  //             <p>Desarrollé una plataforma segura de gestión de citas médicas con funcionalidad CRUD, control de acceso por roles, técnicas de cifrado y una base de datos MySQL con diseño de esquema normalizado y procedimientos almacenados para una programación eficiente, privacidad de datos y recuperación confiable de registros de pacientes.</p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>PHP</li>
  //               <li>HTML</li>
  //               <li>CSS</li>
  //               <li>MySQL</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation>

  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
  //               <title>Code</title>
  //               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  //             </svg>
  //             <div className="project-links">
  //               <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
  //                 <img src={githubIcon} alt="Visit site" />
  //               </a>
  //               <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>Manipulación 3D de Objetos mediante Gestos en Tiempo Real</h3>
  //             <p>Desarrollé un sistema de reconocimiento de gestos en tiempo real para la manipulación intuitiva de objetos 3D. Utilicé un enfoque multimodal integrando OpenCV para procesamiento de video, MediaPipe para detección de manos y extracción de puntos de referencia, y scikit-learn para el entrenamiento del modelo. Se logró un 95.2% de precisión en la clasificación de gestos con rendimiento eficiente en tiempo real.</p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>OpenCV</li>
  //               <li>MediaPipe</li>
  //               <li>scikit-learn</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation>

  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
  //               <title>Folder</title>
  //               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  //             </svg>
  //             <div className="project-links">
  //               <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="\_blank" rel="noreferrer">
  //                 <img src={githubIcon} alt="Visit site" />
  //               </a>
  //               {/* <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a> */}
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>Proyecto de Análisis de Riesgo Crediticio</h3>
  //             <p>
  //               Desarrollé un modelo de clasificación de riesgo crediticio de alta precisión usando XGBoost, logrando 100% en precisión, recall y F1-score para predecir incumplimientos de préstamos. Implementé preprocesamiento riguroso de datos, ingeniería de características y ajuste de hiperparámetros sobre datos desbalanceados, empleando métodos de ensamble, validación cruzada y técnicas de interpretación de modelos.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>XGBoost</li>
  //               <li>Pandas</li>
  //               <li>Matplotlib</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation>

        
  //       {/* <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>VeloCityAI</h3>
  //             <p>
  //               VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>React</li>
  //               <li>Typescript</li>
  //               <li>Html</li>
  //               <li>css</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //       {/* <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>MedicalBooks - Book Selling Site</h3>
  //             <p>
  //               This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Wordpress</li>
  //               <li>Woocommerce</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //       {/* <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
  //             <p>
  //               This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Wordpress</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //       {/* <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>Mitul Industries - Manufacturing Industries Site</h3>
  //             <p>
  //             This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Wordpress</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //       {/* 
  //       <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>Mayatmaj - Film Production Site</h3>
  //             <p>
  //               This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Wordpress</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //       {/* <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>SmartCorners - Real Estate Properties Site</h3>
  //             <p>
  //             This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Wordpress</li>               
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //       {/* <ScrollAnimation animateIn="flipInX">
  //         <div className="project">
  //           <header>
  //             <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  //             <div className="project-links">
  //               <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
  //                 <img src={externalLink} alt="Visit site" />
  //               </a>
  //             </div>
  //           </header>
  //           <div className="body">
  //             <h3>MadeWithLuv - HomeDecor Site</h3>
  //             <p>
  //               This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
  //             </p>
  //           </div>
  //           <footer>
  //             <ul className="tech-list">
  //               <li>Wordpress</li>
  //               <li>Woocommerce</li>
  //             </ul>
  //           </footer>
  //         </div>
  //       </ScrollAnimation> */}

  //     </div>
  //   </Container>
  // );

   return <Container></Container>;
}