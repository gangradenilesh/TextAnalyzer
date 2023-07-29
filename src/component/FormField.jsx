import {useState} from 'react'


export default function TextForm() {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
       
    }
    const handleReverseText = () => { 
        setText(text.split('').reverse().join(''));
        
      }
      

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        
    }

  
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
     
    }
      
        // State for the time display
        const [showTime, setShowTime] = useState(false);
      
        // Function to toggle the time display
        const handleShowTime = () => {
          setShowTime(!showTime);
        };

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" > 
          <h2>Analyse your text..</h2>
          <div className="mb-3"> 
            <textarea className="form-control" value={text} placeholder='Analyse your text..' onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleReverseText}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-pill" onClick={handleReverseText}>Reverse Text</button>
            <button onClick={handleShowTime} className="btn btn-primary mx-1 my-1 rounded-pill">Time</button>{showTime && <p>{new Date().toLocaleTimeString()}</p>}        </div>
        <div className="container my-3">
            <h3>Your Text Statistics</h3>
            <p>Total Word Count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p>Number of Characters: {text.length}</p>
            <p>Total Minutes of Read to the word:  {0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}