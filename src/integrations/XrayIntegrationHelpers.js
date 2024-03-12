import { IPC_HANDLERS, IPC_FUNCTIONS } from "../modules/constants";

export default {
  saveCredentials(data) {
    let formattedData = this.formatData(data);

    window.ipc.invoke(IPC_HANDLERS.DATABASE, {
      func: IPC_FUNCTIONS.UPDATE_CREDENTIALS,
      data: formattedData,
    });

    return formattedData;
  },

  formatData(data) {
    return {
      accessToken: data.auth_token,
      loggedInAt: data.loggedInAt,
      user: {
        client_id: data.client_id,
        client_secret: data.client_secret,
      },
    };
  },
};
