import { Category } from "./category";
import { ResponceModel } from "./responceModel";

export interface CategoryResponceModel extends ResponceModel{
    data:Category[]
}