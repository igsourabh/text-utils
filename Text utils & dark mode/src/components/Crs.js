 const handleupclick = () => {
    console.log(text);
    let NewText = text.toUpperCase();
    setText(NewText);
  };

  const handlelowclick = () => {
    console.log(text);
    let NewText = text.toLowerCase();
    setText(NewText);
  };

  const handlecopy = () => {
    let text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
  };
  const handleclear = () => {
    setText("");
  };
  const handleremovespace = () => {
    let setspace= text.split(/[ ]+/)
    setText(setspace.join(" "))
  };

  const handlechange = (event) => {
    console.log("handle change ");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter the text here"); // its a global text value
