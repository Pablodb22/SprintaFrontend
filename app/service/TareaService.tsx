export async function crearTarea(tareaData: any) {
    try{

        const respuesta= await fetch('http://127.0.0.1:8000/api/crearTareas',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tareaData),
        })
        
        const data = await respuesta.json();

        if (!respuesta.ok) {
            console.error("Error completo de Laravel:", data);
            throw new Error(data.message || data.error || "Error al crear la tarea");
        }
        return data;    

    }catch(err){    
        console.error("Error en crearTarea:", err);
        return null;
    }        
}

export async function getTareasPorEmpresa(empresaId: string) {
    try {
        const respuesta = await fetch(
            `http://127.0.0.1:8000/api/getTareasPorEmpresa?empresa_id=${empresaId}`
        );

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(data.message || "Error al obtener tareas");
        }

        return data.tareas;

    } catch (err) {
        console.error("Error en getTareasPorEmpresa:", err);
        return null;
    }
}

export async function acabarTarea(tareaId: string) {
    try {
        const respuesta = await fetch(
            `http://127.0.0.1:8000/api/acabarTarea/${tareaId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(data.message || "Error al acabar la tarea");
        }

        return data;
    } catch (err) {
        console.error("Error en acabarTarea:", err);
        return null;
    }
}

export async function getTareasPorProyecto(proyectoId:string){
    try {
        const respuesta = await fetch(
            `http://127.0.0.1:8000/api/getTareasPorProyecto?proyectoId=${proyectoId}`
        );

        const data = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(data.message || "Error al obtener tareas");
        }

        return data.tareas;

    } catch (err) {
        console.error("Error en getTareasPorProyecto:", err);
        return null;
    }
}