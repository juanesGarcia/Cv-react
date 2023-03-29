const url = "https://jsonplaceholder.typicode.com/todos/";
const urluser="https://jsonplaceholder.typicode.com/users";


export async function getTask(){
    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
        } catch (error) {
          console.error(error);
        }
}

export async function getUser(){
  try {
      const response = await fetch(urluser);
      const responseJson = await response.json();
      return responseJson;
      } catch (error) {
        console.error(error);
      }
}
