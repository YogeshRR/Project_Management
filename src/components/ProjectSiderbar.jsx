import React from "react";
import CustomButton from "./CustomButton.jsx";

export default function ProjectsSider ({onStartAddProject, projects, onSelectProject, selectProjectId}) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl">Your Project</h2>
        <div>
        <CustomButton onClick={onStartAddProject}>
            + Create a Project
        </CustomButton>
        </div>
        <ul className="mt-8">
            
                {projects.map(project => {
                  let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
                    if (project.id === selectProjectId) {
                        cssClass += ' bg-stone-800 text-stone-200'
                    }else {
                        cssClass += ' text-stone-400'
                    }
                    return (  <li key={project.id} >
                    <button onClick={ () =>onSelectProject(project.id)} className = {cssClass} key={project.id} >{project.titleRef}</button>
                </li>
                  );
                })
            }
           
        </ul>
    </aside>
}

