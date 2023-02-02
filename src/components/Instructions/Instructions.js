import React from "react";
import './Instructions.css';
import { useNavigate } from 'react-router-dom';
import  nodes from "../images/nodes.png";
function Instructions(){
    let navigate = useNavigate();
    const navigateToHomePage=()=>{
        navigate('/home');
    }
    return <div>
        
        <div className="help">
        <center><div className="title"> About Path Finder </div></center>
        Path finding algorithms are a class of algorithms that are designed to find a path from a starting location to a destination location, taking into account various factors such as the presence of obstacles, different costs associated with different paths, and other constraints. These algorithms are used in a wide range of applications, including robotics, video games, and geographic information systems.<br/><br/>
        PathFinder is a learning tool that is intended to help learners understand how these algorithms work and how they can be applied in different scenarios. It provides a visual representation of the path finding process and allows users to experiment with different input parameters and see how they affect the output. By using PathFinder, learners can gain a deeper understanding of how path finding algorithms work and how they can be used to solve real-world problems.<br/><br/>
        It allows exploring five different algorithms: Breadth First Search, Depth First Search, Dijkstra's Algorithm, Greedy Best First Search and A* Search.<br/><br/>
        <ul>
            <li>
            Breadth First Search is an algorithm that expands the search outward from the starting location, exploring all possible paths at the current depth level before moving on to the next level. <br/><br/>

            </li>
            <li>
            Depth First Search is an algorithm that expands the search outward by exploring as far as possible along each branch before backtracking.<br/><br/>

            </li>
            <li>
            Dijkstra's Algorithm is a weighted algorithm that finds the shortest path between two nodes by continually updating the cost of reaching each node. <br/><br/>

            </li>
            <li>
            Best First Search is a heuristic search algorithm that prioritizes nodes based on an estimated cost to reach the goal. <br/><br/>

            </li>
            <li>
            A* Search is another heuristic search algorithm that combines the benefits of Best First Search with the guarantee of optimality provided by Dijkstra's Algorithm.<br/><br/>

            </li>
        </ul>
        
        
        
       
       PathFinder allows users to compare these algorithms by running them on the same input and seeing how they perform. It also allows users to interact with the algorithms by adjusting input parameters and observing the effect on the output. This can be a useful way for learners to gain a deeper understanding of how these algorithms work and how they can be applied in different situations.Path finding algorithms are a class of algorithms that are designed to find a path from a starting location to a destination location, taking into account various factors such as the presence of obstacles, different costs associated with different paths, and other constraints. These algorithms are used in a wide range of applications, including robotics, video games, and geographic information systems.<br/><br/>
PathFinder is a learning tool that is intended to help learners understand how these algorithms work and how they can be applied in different scenarios. It provides a visual representation of the path finding process and allows users to experiment with different input parameters and see how they affect the output. By using PathFinder, learners can gain a deeper understanding of how path finding algorithms work and how they can be used to solve real-world problems.<br/>

        </div>
        
        
            <div className="help"><br></br>
            <center><div className="title"> Usage Guidelines </div></center>
            Here are some guidelines on how to use the PathFinder path finding system:<br></br>
            <ol>
                <li>
                Choose a starting node (also known as the source node) by clicking on it in the grid. This will be the location where the search will begin.<br/>
                </li>
                <li>
                Choose a destination node by clicking on it in the grid. This will be the location that the algorithm will try to reach.<br/>

                </li>
                <li>
                (Optional) Choose some nodes to be weights or obstacles by clicking on them in the grid. Weights represent cells that have a higher cost associated with them, while obstacles represent cells that are impassable.<br/>
                </li>
                <li>
                Click the "Visualize" button to start the search. You will see the algorithm progress through the grid as it tries to find a path from the starting location to the destination.<br/>
                </li>
                <li>
                Observe the search as it progresses. You can use the controls to reset the search at any time.<br/>

                </li>
                <li>
                (Optional) Experiment with different input parameters by adjusting the starting and ending locations, adding weights and obstacles, and adjusting the heuristics used by certain algorithms. This can help you gain a deeper understanding of how the algorithms work and how they respond to different input conditions.<br/>
                </li>
                <li>
                When you are finished, click the "Reset" button to clear the grid and start a new search.<br/>

                </li>

            </ol>

            </div>
            <div className="help" >
                <div>The following list explains the meaning of different colors during the traversal process:<br/></div>
                <center><img src={nodes} className="gif" height={500} width={700}/></center>
            </div>
            <div className="but">
            <center>

<button className="home" onClick={ navigateToHomePage }> Home Page</button></center>
            </div>
            
    </div>

}
export default Instructions;