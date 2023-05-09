export const initStyle = (src) => {
    return new Promise((resolve, reject) => {
      const sc = document.createElement("link");
      sc.rel = "stylesheet";
      sc.href = src;
      document.body.appendChild(sc);
      sc.onload = () => {
        resolve();
      };
      sc.onerror = () => {
        reject();
      };
    });
  };