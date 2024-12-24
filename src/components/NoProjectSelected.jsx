import noProjectImage from '../assets/no-projects.png';
import CustomButton from './CustomButton';

export default function NoProjectSelected ({onStartAddProject}) {
    return <div className="mt-24 text-center w-2/3">
        <img src= {noProjectImage}alt='An empty task list'  
             className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a Project or get started with new one.</p>
        <p className='mt-4'>
            <CustomButton onClick={onStartAddProject} >Create a Project</CustomButton>
        </p>
    </div>
}