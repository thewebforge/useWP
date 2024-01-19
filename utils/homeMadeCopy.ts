const homeMadeCopy = (text: string) => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy"); // This is intentionally not using the Async Clipboard API
    document.body.removeChild(tempTextArea);
  }

  export default homeMadeCopy;