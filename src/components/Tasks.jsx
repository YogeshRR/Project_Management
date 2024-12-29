import NewTask from "./NewTask";

export default function Tasks () {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">
            Tasks
        </h2>
        New Tasks 
        <NewTask />
        <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
    </section>
}