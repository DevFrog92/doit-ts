import { ICoordinates } from "./Icoordinates";
import { makeICoordinates } from "./makeIcoordinates";
import Chance from "chance";

const c = new Chance

export const makeRandomICoordinates = (): ICoordinates => makeICoordinates(c.latitude(), c.longitude())
