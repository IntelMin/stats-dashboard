
import { createContext  } from "react";
export type Monlogs = {
    market: string |null;
    kind: number | -1;
}

const MonlogTradesContext = createContext<Monlogs | null>(null)
export default MonlogTradesContext