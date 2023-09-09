import { randomUUID } from 'node:crypto';

export class databaseMemory {
    #profile = new Map();

    // Lista os Perfil Criados
    list() {
        return Array.from(this.#profile.entries()).map((profileArray) => {
            const id = profileArray[0]
            const information = profileArray[1]

            return {
                id,
                ...information,
            }
        })
    };

    // Cria o Perfil
    create(profile) {
        const profileId = randomUUID() // Essa função cria um ID aleatorio

        this.#profile.set(profileId, profile)
    };

    // Modifica Informações do Perfil
    update(id, profile) {
        this.#profile.set(id, profile) // 
    };

    // Deleta o Perfil
    delete(id) {
        this.#profile.delete(id)
    };
};