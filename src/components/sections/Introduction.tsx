import { FaInstagram, FaEnvelope } from "react-icons/fa6";

const Introduction = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akpe.contacto@email.com");
    alert("Correo copiado al portapapeles 💌");
  };

  return (
    <div
      className="font-outfit elative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('../../../public/images/i2.jpg')`,
      }}
    >
      <div className="bg-[#FAF8F5]/80 rounded-2xl shadow-xl max-w-3xl w-full mx-6 p-8 text-center space-y-6">
        <h1 className="text-[#A75D2A] text-5xl font-bold">Asociación Akpé</h1>
        <p className="text-[#3E2F1C] text-lg leading-relaxed font-medium">
          Somos una organización sin ánimo de lucro que trabaja para mejorar la vida de comunidades en Ghana, África, mediante proyectos de desarrollo sostenible, educación y cooperación internacional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <a
            href="https://www.instagram.com/paranolvidar_?igsh=NnFtc29neGVpYXJw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-[#E1306C] to-[#FDCB82] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-98"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center bg-[#D99E6A] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-98"
          >
            <FaEnvelope className="mr-2" /> ¡Contáctanos!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
