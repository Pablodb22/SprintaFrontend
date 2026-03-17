const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProyectos(codigoEmpresa: string) {
    try {
        const response = await fetch(
            `${API_URL}/api/getProyectos?empresa=${codigoEmpresa}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Error al obtener proyectos:", data);
            throw new Error(data.message || "Error al obtener proyectos");
        }

        return data;

    } catch (error) {
        console.error("Error en getProyectos:", error);
        return null;
    }
}

export async function crearProyecto(datos:any) {
    try{
        const response = await fetch(`${API_URL}/api/crearProyectos`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
        });
        
        const data = await response.json();

        if (!response.ok) {
        console.error("Error completo de Laravel:", data);
        throw new Error(data.message || data.error || "Error al crear el proyecto");
        }

        return data;

    }catch(error) {
        console.error("Error en crear proyecto:", error);
    }

    }

    export async function eliminarProyecto(id: string) {
    try {
        const response = await fetch(`${API_URL}/api/eliminarProyecto/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Error al eliminar proyecto:", data);
            throw new Error(data.message || "Error al eliminar proyecto");
        }

        return data;

    } catch (error) {
        console.error("Error en eliminarProyecto:", error);
        return null;
    }

    }