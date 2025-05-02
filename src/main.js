import { minUser } from "./stages/stages-min.js";
import { detailGet } from "./scenarios/get.js";
import { detailPost } from "./scenarios/post.js";

export const options = minUser

export default function(){
    detailGet();
    detailPost();
}