import axios from "axios";

export const API_STATUS_OK = "Profil créé";
export const API_STATUS_CONNECT = "utilisateur connecté";
export const API_ERROR_CONNECT = "erreur dans l'email ou le mot de passe";
export const API_ERROR_PROFIL = "email déjà utilisé";

const makeApiClient = (jwt) => {
  if (jwt) {
    axios.defaults.headers.common = { Authorization: `bearer ${jwt}` };
  }

  return axios.create({
    headers: {
      Authorization: `bearer ${jwt}`,
    },
  });
};

export default makeApiClient;
