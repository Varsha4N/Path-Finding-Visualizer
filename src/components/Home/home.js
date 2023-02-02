import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
import Tick from "../images/tick.svg";
import HomeGif from "../images/home.gif";
function HomePage(){
    let navigate=useNavigate();
    const navigateToDescription=()=>{
        navigate('/comparepage');
    }
    const navigateToFeedback=()=>{
        navigate('/feedback');
    }
    const navigateToInstructions=()=>{
        navigate('/help');
    }
    return <div className="outer-box">
        <div className="box-4">
            <div className="gif-main">
                <img src={HomeGif} alt={"loading.."} className="gif"/>

            </div>
        </div>
        <div className="box-1">
            <div className="buttons" align="right">
               {/* <a href="https://theoblivisci.github.io/?algo=1"><button >Breadth-First Search</button></a>
                <br/>
                
                <a href="https://theoblivisci.github.io/?algo=2"><button >Depth-First Search</button><br/></a>
                <a href="https://theoblivisci.github.io/?algo=3"><button > Dijkstra's Shortest Path</button><br/></a>
                <a href="https://theoblivisci.github.io/?algo=4"><button >Greedy Best First Search</button><br/></a>
                <a href="https://theoblivisci.github.io/?algo=5"><button >A* Best First Search</button><br/></a> */}
                <a href="http://127.0.0.1:5500/index.html?algo=1"><button >Breadth-First Search</button></a>
                <br/>
                
                
                <a href="http://127.0.0.1:5500/index.html?algo=2"><button >Depth-First Search</button><br/></a>
                <a href="http://127.0.0.1:5500/index.html?algo=3"><button > Dijkstra's Shortest Path</button><br/></a>
                <a href="http://127.0.0.1:5500/index.html?algo=4"><button >Greedy Best First Search</button><br/></a>
                <a href="http://127.0.0.1:5500/index.html?algo=5"><button >A* Best First Search</button><br/></a>
                
                {/* <button > </button><br/>
                <button ></button><br/>
                <button ></button><br/> */}
            </div>
        </div>
        <div className="box-2"></div>
        <div className="box-3">
            <div className="inner">
            <button onClick={navigateToInstructions}>Help</button><br/>
                <button onClick={navigateToDescription}>Description</button><br/>
                <button onClick={navigateToFeedback}>Feedback</button>

            </div>
                
        </div>
    </div>
    
    
    // <div>
    //     <div className="outer-box">
    //         <div className="box1">
    //         {/* <div className="text">Visualize Now!! Choose an Algorithm</div> */}
    //         <div>
    //         <div className="inner-text">Algorithms</div><br/>

    //         <button onClick={navigateToBFS}>BFS</button><br/>
    //         <button onClick={navigateToDFS}>DFS</button><br/>
    //         <button onClick={navigateToDijkstra}>Dijkstra</button><br/>
    //         <button onClick={navigateToAStar}>A* Search</button><br/>
    //         <button onClick={navigateToGreedyBFS}>Greedy BFS</button><br/>

    //         </div>
           
    //         <div className="box2">
    //             <button onClick={navigateToDescription}>Description</button><br/>
    //             <button onClick={navigateToFeedback}>Feedback</button>

    //         </div>
    //         </div>
    //         {/* <div className="box3"></div>
    //         <div className="box2"> review </div> */}
            
    //     </div>
        
          
        
    // </div>
}
export default HomePage;