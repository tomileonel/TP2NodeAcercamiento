import axios from "axios";

import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from "../src/modules/OMDBWrapper.js";

(async () => {
    console.log("Resultados de búsqueda por página:");
    const searchByPageResult = OMDBSearchByPage("Batman");
    console.log(searchByPageResult);
})();