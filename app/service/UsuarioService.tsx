export async function registroUsuario(datos: any) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json(); 

    if (!response.ok) {      
      console.error("Error completo de Laravel:", data);
      throw new Error(data.message || data.error || "Error al registrar el usuario");
    }

    return data; 
  } catch (error: any) {
    console.error("Error en registroUsuario:", error);
    throw error; 
  }
}

export async function loginUsuario(datos: any) {
  try{
    const response=await fetch("http://127.0.0.1:8000/api/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error completo de Laravel:", data);
      throw new Error(data.message || data.error || "Error al iniciar sesión");
    }
    
    return data;
  }catch (error: any) {
    console.error("Error en loginUsuario:", error);
    throw error; 
  }
}

export async function obtenerUsuario(email: string) {
  try{
    const response=await fetch(`http://127.0.0.1:8000/api/usuario?email=${email}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();    

    if (!response.ok) { 
      console.error("Error completo de Laravel:", data);
      throw new Error(data.message || data.error || "Error al obtener el usuario");
    }

    return data;

  }catch (error: any) {
    console.error("Error en obtenerUsuario:", error);
    throw error; 
  }
}