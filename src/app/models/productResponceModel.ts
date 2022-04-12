import { Product } from "./product";
import { ResponceModel } from "./responceModel";

export interface ProductResponceModel extends ResponceModel
{
data:Product[];

}