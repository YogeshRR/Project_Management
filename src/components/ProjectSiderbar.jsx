import CustomButton from "./CustomButton.jsx";

export default function ProjectsSider () {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl">Your Project</h2>
        <div>
        <CustomButton>
            + Create a Project
        </CustomButton>
        </div>
        <ul>
            <li>Main Project</li>
        </ul>
    </aside>
}