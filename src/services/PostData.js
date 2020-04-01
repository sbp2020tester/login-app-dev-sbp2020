function PostData(type, userData) {
  let Baseurl = "https://api.thewallscript.com/restful/";

  return new Promise((resolve, reject) => {
    fetch(Baseurl + type, {
      method: "POST",
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject();
      });
  });
}
export default PostData;
