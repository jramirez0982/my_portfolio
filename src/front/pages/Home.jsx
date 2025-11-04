import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import julianRamirez from "../assets/img/julian-ramirez.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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

	return (
		<div className="text-center mt-5 mb-5">
			{/* Contenedor principal para centrar la fila horizontalmente */}
			<div className="d-flex justify-content-center">
				{/* Contenedor de la imagen y el texto: usamos d-flex para que estén lado a lado */}
				{/* Usamos 'align-items-center' para alinearlos verticalmente al centro (opcional) */}
				{/* Se usa 'col-lg-8' o un tamaño similar para limitar el ancho del contenido y mantener el centrado */}
				<div className="d-flex flex-column flex-lg-row align-items-center col-10 col-md-8 col-lg-6">
					{/* Contenedor de la Imagen */}
					<div className="flex-shrink-0 me-4"> {/* flex-shrink-0 previene que se encoja. me-4 es margin-right */}
						<img
							src={julianRamirez}
							className="img-fluid rounded-circle"
							style={{ width: "200px", height: "200px", objectFit: "cover" }} /* Tamaño fijo para la imagen */
							alt="Julian Ramirez"
						/>
					</div>
					{/* Contenedor del Texto (Lorem) */}
					<div className="flex-grow-1 text-start"> {/* flex-grow-1 hace que ocupe el espacio restante. text-start para que el texto justifique a la izquierda dentro de este div */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur, consequatur deleniti tempore aliquam dolores esse magnam doloribus neque officiis rem dolor officia eaque nostrum vero. Cumque voluptates incidunt delectus repellat reiciendis deserunt minima sapiente expedita. Quia sequi est nesciunt, fugit rem ex iste nulla, iusto soluta labore eveniet! Sapiente?
					</div>
				</div>
			</div>
		</div>
	);
}; 