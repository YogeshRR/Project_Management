import noProjectImage from '../assets/no-projects.png';
import { headerStyle, imageStyle, paragraphStyle } from './constant';
import CustomButton from './CustomButton';

export default function NoProjectSelected ({onStartAddProject}) {
    return <div className="mt-24 text-center w-2/3">
        <img src= {noProjectImage}alt='An empty task list'  
             className= {imageStyle}/>
        <h2 className= {headerStyle} >No Project Selected</h2>
        <p className= {paragraphStyle}>Select a Project or get started with new one.</p>
        <p className='mt-4'>
            <CustomButton onClick={onStartAddProject} >Create a Project</CustomButton>
        </p>
    </div>
}