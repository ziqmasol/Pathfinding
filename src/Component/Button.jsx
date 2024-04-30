import './Styles/button.css'

export default function Button({refreshMaze,bfs,dfs}){
    return <div>
        <button className={"maze-button"} onClick={refreshMaze}>
          Refresh Maze
        </button>

        <button className={"maze-button"} onClick={bfs}>
          Breadth-First Search
        </button>
        <button className={"maze-button"} onClick={dfs}>
          Depth-First Search
        </button>
    </div>
}