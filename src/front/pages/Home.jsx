import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import julianRamirez from "../assets/img/julian-ramirez.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { EstudiosCard } from "../components/EstudiosCard.jsx";
import { HabilidadesCard } from "../components/HabilidadesCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])


	const estudiosFormales = [
		{
			Titulo: "Magister en Ciencias Computacionales",
			Universidad: "Universidad Utel",
			lugar: "Ciudad de Mexico, Mexico",
			ImagenLogo: "src/front/assets/img/logo-universidad-utel1.jpeg",
			fecha: "Enero de 2023"
		},

		{
			Titulo: "Especialista en Automática",
			Universidad: "Universidad Pontificia Bolivariana",
			lugar: "Medellín, Colombia",
			ImagenLogo: "src/front/assets/img/upb-logo.png",
			fecha: "Marzo de 2018"
		},

		{
			Titulo: "Especialista en Gerencia de Proyectos",
			Universidad: "Universidad Esumer",
			lugar: "Medellín Colombia",
			ImagenLogo: "src/front/assets/img/logo-esumer.jpeg",
			fecha: "Marzo de 2012"
		},

		{
			Titulo: "Ingeniero Electrónico",
			Universidad: "Universidad Nacional de Colombia",
			lugar: "Manizales, Colombia",
			ImagenLogo: "src/front/assets/img/unal-logo.jpg",
			fecha: "Agosto de 2005"

		}

	]

	const habilidades = [
		{
			habilidad: "HTML",
			logo: "",
		},

		{
			habilidad: "JavaScript",
			logo: "",
		},

		{
			habilidad: "MySQL",
			logo: "",
		},

		{
			habilidad: "Python",
			logo: "",
		},

		{
			habilidad: "React",
			logo: "",
		},

		{
			habilidad: "Flask",
			logo: "",
		},

		{
			habilidad: "Postman",
			logo: "",
		},

		{
			habilidad: "Jest",
			logo: "",
		},

		{
			habilidad: "Matlab",
			logo: "",
		},

		{
			habilidad: "CSS",
			logo: "",
		},

		{
			habilidad: "Bootstrap",
			logo: "",
		},

		{
			habilidad: "Django",
			logo: "",
		},

		{
			habilidad: "SQLAlchemy",
			logo: "",
		},

	]


	return (
		<div className="text-center mt-2 pt-2">
			<div className="fs-3 fw-bold mb-3">
				Perfil
			</div>
			{/* Contenedor principal para centrar la fila horizontalmente */}
			<div className="d-flex justify-content-center border border-3 rounded-5 mx-5 border-custom-light-blue">
				{/* Contenedor de la imagen y el texto: usamos d-flex para que estén lado a lado */}
				{/* Usamos 'align-items-center' para alinearlos verticalmente al centro (opcional) */}
				{/* Se usa 'col-lg-8' o un tamaño similar para limitar el ancho del contenido y mantener el centrado */}
				<div className="d-flex flex-column flex-lg-row align-items-center col-12 col-md-10 col-lg-8 p-4">
					{/* Contenedor de la Imagen */}
					<div className="flex-shrink-0 me-4"> {/* flex-shrink-0 previene que se encoja. me-4 es margin-right */}
						<img
							src={julianRamirez}
							className="img-fluid rounded-circle"
							style={{ width: "250px", height: "250px", objectFit: "cover" }} /* Tamaño fijo para la imagen */
							alt="Julian Ramirez"
						/>
					</div>
					{/* Contenedor del Texto (Lorem) */}
					<div className="font-base lead flex-grow-1 text-justify mt-2"> <strong> {/* flex-grow-1 hace que ocupe el espacio restante. text-start para que el texto justifique a la izquierda dentro de este div */}
						Ingeniero Electrónico y Magíster en Ciencias Computacionales, poseo una sólida trayectoria
						profesional liderando equipos y gestionando proyectos tecnológicos. Soy Full Stack Developer
						experto en Python, JavaScript, React, Flask y SQL. Mi experiencia en sectores como el aeronáutico y
						el mantenimiento industrial me permite estructurar, optimizar y liderar proyectos creando soluciones escalables y seguras.
						Mi enfoque es aportar valor, conectando las necesidades de negocio con la tecnología a través de arquitecturas eficientes,
						conectando la visión de negocio con la excelencia técnica. </strong>
					</div>
				</div>
			</div>

			<div id="educacion" className="justify-content-center mx-5 flex-column border-bottom border-custom-light-blue border-3 p-5">
				<div className="fs-3 fw-bold mb-3">
					Formación Académica
				</div>

				<div className="d-flex">
					<div className="row g-0 justify-content-center">
						{
							estudiosFormales.map((estudios, index) => {
								return (
									<div className="col-md-5 m-1 p-2">
										<EstudiosCard universidad={estudios.Universidad} titulo={estudios.Titulo} lugar={estudios.lugar} fecha={estudios.fecha} logo={estudios.ImagenLogo} />
									</div>
								)
							})
						}
					</div>
				</div>


			</div>

			<div id="habilidades" className="justify-content-center mx-5 flex-column border-bottom border-custom-light-blue border-3 p-5">
				<div className="fs-3 fw-bold mb-3">
					Habilidades
				</div>

				<div className="d-flex">
					<div className="row g-0 justify-content-center">
						{
							habilidades.map((habilidad, index) => {
								return (
									hola
								)

							})
						}
					</div>

				</div>

			</div>

		</div>
	);
}; 