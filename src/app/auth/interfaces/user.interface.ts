export interface User {
    _id:      string;
    email:    string;
    name:     string;
    isActive: boolean;
    roles:    string[];
    __v:      number;

    amigos: string[];
    imgPerfil: string;
    // imageUuid: string;
    // imgFileExtension: string;

    // secureUrl: string;
}