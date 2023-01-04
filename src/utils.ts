import american from "./images/cuisine/american.jpg";
import chinese from "./images/cuisine/chinese.jpg";
import french from "./images/cuisine/french.jpg";
import indian from "./images/cuisine/indian.jpg";
import italian from "./images/cuisine/italian.jpg";
import japanese from "./images/cuisine/japanese.jpg";
import defaultCuisine from "./images/cuisine/defaultCuisine.jpg";

export function getCuisineImg(cuisine: string) {
    switch (cuisine) {
        case "american":
            return american;
        case "chinese":
            return chinese;
        case "french":
            return french;
        case "indian":
            return indian;
        case "italian":
            return italian;
        case "japanese":
            return japanese;
        default:
            return defaultCuisine;
    }
}
