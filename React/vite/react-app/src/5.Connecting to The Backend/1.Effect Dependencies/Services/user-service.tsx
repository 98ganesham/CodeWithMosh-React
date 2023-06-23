import ApiClient from "./Api-client";
import create from "./HTTP-Service";
export interface User {
  id: number;
  name: string;
}

export default create("/users");
