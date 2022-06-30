import {io} from "socket.io-client";

export let socket = io(process.env.REACT_APP_SOCKET_BASE_URL || 'http://localhost:5000/')

