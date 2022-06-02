import io from "socket.io-client";
import helpers from 'backendservice/helpers'

const socket = io(helpers.basePORT);

export default socket