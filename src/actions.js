import { redirect } from "react-router-dom";

const URL = "https://cheeseapi.onrender.com";

export const createAction = async ({ request }) => {
    const formData = await request.formData();
console.log(formData)
    const newCheese = {
        name: formData.get("name"),
        image: formData.get("image"),
        country: formData.get("country"),
    };

    await fetch(URL + "/cheese", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheese),
    });

    return redirect("/");
};