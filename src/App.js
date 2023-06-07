import { useState } from "react";
import "./App.css";
import profile from "./images/profile.png";
import rgbHex from "rgb-hex";

function App() {
  const [color, setColor] = useState("#FF0000");
  const [input, setInput] = useState("Virat kohli");
  const [inputColor, setInputColor] = useState("#FFFFFF"); // New state variable for input field color

  function handleClick(e) {
    let id = e.target.id;
    let a = document.getElementsByClassName("cards");
    for (let i = 0; i < 9; i++) {
      if (id === a[i].id) {
        a[i].style.width = "132px";
        a[i].style.height = "132px";
      } else {
        a[i].style.width = "100px";
        a[i].style.height = "100px";
      }
    }
    let d = "#" + rgbHex(e.target.style.backgroundColor);
    setColor(d);
    setInputColor(d); // Update input field color
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        
          <h1>Card Color Picker</h1>
      
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
      

        <div>
          <div
            className="cards"
            id="lightOrange"
            style={{
              backgroundColor: "#00d1ff",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#00d1ff" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>




        <div>
          <div
            className="cards"
            id="darkGrey"
            style={{
              backgroundColor: "#ff00ee",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#ff00ee" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>






        <div>
          <div
            className="cards"
            id="red"
            style={{
              backgroundColor: "#b500ff",
              width: "132px",
              height: "132px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#b500ff" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>














  <div>
          <div
            className="cards"
            id="lightBlue"
            style={{
              backgroundColor: "#2EC4B6",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#2ec4b6" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>





        <div>
          <div
            className="cards"
            id="lightYellow"
            style={{
              backgroundColor: "#8000ff",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#8000ff" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>






        <div>
          <div
            className="cards"
            id="lightGrey"
            style={{
              backgroundColor: "#6900ff",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#6900ff" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>





        <div>
          <div
            className="cards"
            id="darkBlue"
            style={{
              backgroundColor: "#000aff",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#000aff" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>






        <div>
          <div
            className="cards"
            id="ash"
            style={{
              backgroundColor: "#006eff",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#006eff" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>









        <div>
          <div
            className="cards"
            id="lightPink"
            style={{
              backgroundColor: "#00ffb3",
              width: "80px",
              height: "100px",
            }}
            onClick={handleClick}
          ></div>
          {inputColor === "#00ffb3" ? (
            <>
              <p>{inputColor}</p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>














      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          marginBottom:"110px",
         
        
        }}
      >
        <div
          style={{
            backgroundColor: color,
            width: "400px",
            borderBottomRightRadius: "30px",
            borderTopLeftRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          
          }}
        >
          <div style={{}}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={profile}
                style={{
                  borderRadius: "50%",

                  border: "2px solid black",
                }}
                alt="Dan Abramov"
              />
            </div>
            <h2>{input}</h2>
          </div>
        </div>

        <div className="sSecond">
          <h1 className="line1">Design my Card</h1>
          <p>
            Hey there user want to build your personalised cards choose the
            colour from the palatte above and fill your name
          </p>

          <p className="line3">
            Your selected colour is <b>{color}</b>
          </p>
          <p className="line4">Name</p>
          <input
            className="input1"
            name="name"
            value={input}
            onChange={handleChange}
            // style={{ backgroundColor: inputColor }}
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
