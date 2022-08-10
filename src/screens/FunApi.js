const url = "https://jsonplaceholder.typicode.com/todos/";

export async function getTask(){
    try {
        const response = await fetch(url);
        console.log(response.statusText);
        const responseJson = await response.json();
   
        return responseJson;
        } catch (error) {
          console.error(error);
        }
}
