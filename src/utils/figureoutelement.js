import {  CopyBlock, dracula, hybrid, obsidian, rainbow } from "react-code-blocks";
import {CodeBlock} from "@atlaskit/code"

export default function figureoutelement(s) {
  let news = "";
  if (s) {
    if (s[0] == "#") {
      if (s[1] == "#") {
        if (s[2] == "#") {
          if (s[3] == "#") {
            if (s[4] == "#") {
              if (s[5] == "#") {
                news = s.substring(6);
                return <h6>{news}</h6>;
              } else {
                news = s.substring(5);
                return <h5>{news}</h5>;
              }
            } else {
              news = s.substring(4);
              return <h4>{news}</h4>;
            }
          } else {
            news = s.substring(3);
            return <h3>{news}</h3>;
          }
        } else {
          news = s.substring(2);
          return <h2>{news}</h2>;
        }
      } else {
        news = s.substring(1);
        return <h1>{news}</h1>;
      }
    } else if (s[0] == "-") {
      s = s.substring(1);
      news = s.split("--");
      return (
        <ul>
          {news.map((ele, num) => (
            <li key={num}>{ele}</li>
          ))}
        </ul>
      );
    } else if (s[0] == "/") {
      news = s.substring(1);
      return <img src={news} />;
    } else{
      // s=s.replaceAll("<","&lt;")
      // s=s.replaceAll(">","&gt;")
      let type=""
      switch(s[0]){
        case "h":
          type="html"
          break;
        case "c":
          type="css"
          break;
        case "j":
          type="js"
          break;
        default:
          return (<p>{s}</p>)
      }
      s=s.replace(s[0],"")
      return (
        <div className="code-con">
            <CopyBlock
            codeBlockStyle={{fontsize:"2rem"}}
          text={s}
          language={type}
          codeBlock
          showLineNumbers={true}
          theme={dracula}
        />
        </div>
      );
    } 
  }
}
