const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registroUsuario(datos: any) {
  try {
    const response = await fetch(`${API_URL}/api/registro`, {
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
    const response=await fetch(`${API_URL}/api/login`,{
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

export async function actualizarUsuario(datos: any) {
   try{   
    const response = await fetch(`http://127.0.0.1:8000/api/usuarioActualizado?email=${encodeURIComponent(datos.email)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    const data = await response.json();

    if (!response.ok) {
      console.error("Error completo de Laravel:", data);
      throw new Error(data.message || data.error || "Error al actualizar el usuario");
    }

    return data;

   }catch (error: any) {
     console.error("Error en actualizarUsuario:", error);
     throw error; 
   }
}

export async function actualizarContraseña(datos: any) {
 try{
  const response=await fetch(`http://127.0.0.1:8000/api/usuarioNuevaPassword?email=${encodeURIComponent(datos.email)}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error completo de Laravel:", data);
    throw new Error(data.message || data.error || "Error al actualizar la contraseña");
  }

  return data;

 }catch (error: any) {
    console.error("Error en actualizarContraseña:", error);
    throw error;
  }
}

export async function funcionAdmin(email: string) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/funcionAdmin?email=${email}`
    );
    
    const data = await response.json();
    
    return data;
    
  } catch (err) {
    console.error("Error en funcionAdmin:", err);
    return null;
  }
}
export async function buscarTrabajadores(email: string) {
  try{
    const response =await fetch(`http://127.0.0.1:8000/api/buscarTrabajadores?email=${encodeURIComponent(email)}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();

    if (!response.ok) {
      console.error("Error completo de Laravel:", data);
      throw new Error(data.message || data.error || "Error al buscar trabajadores");
    }

    return data;
  }catch(error) {
    console.error("Error en buscarTrabajadores:", error);
  }
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string | ArrayBuffer | null;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('No se pudo convertir el archivo a base64'));
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}