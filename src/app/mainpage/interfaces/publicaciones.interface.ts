export interface PublicacionResponse {
    publicacion: Publicacion;
    user:        User;
}

export interface Publicacion {
    _id:              string;
    user:             string;
    text:             string;
    // comentarios:      any[];
    // likes:            any[];
    secureUrl:        string;
    publication_date: string;
    __v:              number;
}

export interface User {
    profileImage: string;
    name:         string;
}
