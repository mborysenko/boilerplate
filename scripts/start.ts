import { serve } from "../build/tasks/serve";
import { configuration } from "../configuration"

serve(configuration, (err) => {
    if (err) {
        throw err;
    }

    console.log("Server is listening");
})