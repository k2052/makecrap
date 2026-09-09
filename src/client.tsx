import { initClient, initClientNavigation } from "rwsdk/client";

// RedwoodSDK uses RSC RPC to emulate client side navigation.
const { handleResponse, onHydrated } = initClientNavigation();
initClient({ handleResponse, onHydrated });
